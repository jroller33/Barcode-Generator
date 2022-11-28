import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const JsBarcode = require('jsbarcode');
const { Canvas } = require("canvas");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const barcodeElement = ReactDOM.createRoot(document.getElementsByClassName('barcode'));

const barcode = JsBarcode(".barcode", "Hello");

barcodeElement.render(barcode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
