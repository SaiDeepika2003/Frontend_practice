import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box1 from './Box1';
import Chess from './Chess';
import reportWebVitals from './reportWebVitals';
import Header2 from './Header2';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Box1/>
     <Chess/>
     <Header/>
     <LeftSide/>
     <Footer/>
     <Header2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
