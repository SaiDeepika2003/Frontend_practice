import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PassComponents from './PassComponents';
import reportWebVitals from './reportWebVitals';
import MemoFunctionDemo from './MemoFunctionDemo';
import UseCallBackDemo from './UseCallBackDemo';
import ComponentA from './ComponentA';
import Title from './Title';
import DisplayComponents from './DisplayComponents';
import Display from './Display';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Display/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
