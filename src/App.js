import React from 'react';
import Loading from './components/Loading';
import Data from './components/Data';
import Error from './components/Error';
import './App.css';

export default function App() {
  return (
      <>
        <Loading url={process.env.REACT_APP_URL_LOADING_BUILD} />
        <Data url={process.env.REACT_APP_URL_DATA_BUILD} />
        <Error url={process.env.REACT_APP_URL_ERROR_BUILD} />
      </>
  );
}