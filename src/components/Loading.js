import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading(props) {
    const {url} = props;
    const { loading } = useJsonFetch(url);
    return (
        <div className="component loading">
            <p>Статус загрузки:</p>
            <p>{loading ? 'идет загрузка...' : 'нет загрузки'}</p>
        </div>
    );
}