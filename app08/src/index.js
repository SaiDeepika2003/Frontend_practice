import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './css/App.css';
import StateDemoTwo from './StateDemoTwo';
import reportWebVitals from './reportWebVitals';
import StateClassComponentDemo1 from './StateClassComponentDemo1';
import StateDemo3 from './StateDemo3';
import StateDemo4 from './StateDemo4';
import StateDemo5 from './StateDemo5';
import FormDemoOne from './FormDemoOne';
import FormDemoTwo from './FormDemoTwo';
import Demo from './Demo';
import FormDemoThree from './FormDemoThree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo />
    <hr></hr>
    <StateClassComponentDemo1/>
    <hr></hr>
    <StateDemoTwo/>
    <hr></hr>
    <StateDemo3/>
    <hr></hr>
    <StateDemo4/>
    <hr></hr>
    <StateDemo5/>
    <hr></hr>
    <FormDemoOne/>
    <hr></hr>
    <FormDemoTwo/>
    <hr></hr>
    <FormDemoThree/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
