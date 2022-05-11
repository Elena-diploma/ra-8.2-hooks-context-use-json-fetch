import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Error(props) {
    const {url} = props;
    const { error } = useJsonFetch(url);
    const { message, status, text } = error;
    return (
        <div className="component error">
            {message || status || text ? (
                <div>
                    Ошибка!
                    <p>{message}</p>
                    <p>{status}</p>
                    <p>{text}</p>
                </div>
            ) : (
                <p>Нет ошибок</p>
            )}
        </div>
    );
}