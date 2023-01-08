import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter } from "react-router-dom";
import Layout from './Layout';
import './index.css';

export default function Main(){
  return (
    <HashRouter>
     <Layout/>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
