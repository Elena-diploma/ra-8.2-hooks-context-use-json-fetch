import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data(props) {
    const {url} = props;
    const { data } = useJsonFetch(url);
    return (
        <div className="component data">
            <p>Данные:</p>
            <p>{data ? 'получены' : 'отсутствуют'}</p>
        </div>
    );
}