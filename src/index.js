import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter } from "react-router-dom";
import Layout from './Layout';
import './index.css';
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-16PTFCZ1GV", {testMode: true, debug: true});

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
