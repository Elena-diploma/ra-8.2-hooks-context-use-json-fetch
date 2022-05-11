import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        let canceled = false;
        const fetchData = () => {
            if (canceled) {
                return;
            }

            setLoading(true);

            return fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        setError((prev) => ({
                            ...prev,
                            status: response.status,
                            text: response.statusText,
                        }));
                    }
                    if (!canceled) return response.json();
                })
                .then((result) => {
                    setData(true);
                })
                .catch((e) => {
                    setError((prev) => ({
                        ...prev,
                        message: e.message,
                    }));
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchData();
        return () => (canceled = true);
    }, [url, opts]);
    return { data, loading, error };
}