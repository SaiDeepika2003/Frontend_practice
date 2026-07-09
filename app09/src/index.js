import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AxiosDemonstration from './AxiosDemonstration';
import './css/App.css'
import UseMemoHookDemoOne from './UseMemoHookDemoOne';
import DemoOne from './DemoOne';
import UseEffectDemoTwo from './UseEffectDemoTwo';
import UseStateProblemDemo1 from './UseStateProblemDemo1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<UseReducerHookDemoOne />
    <UseReducerHookDemoTwo/>*/}
    <AxiosDemonstration/>
    {/*<UseMemoHookDemoOne/> */}
    {/*<UseStateProblemDemo1/>*/}
    {/*<UseEffectDemoTwo/>*/}
    {/*<DemoOne />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
