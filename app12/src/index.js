import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContentCopy from './ContentCopy';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/main.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.min.css'
import Header from './components/Header.js'
import Banner from './components/Banner.js'
import AboutUs from './components/AboutUs.js'
import WhyUs from './components/WhyUs.js'
import Menu from './components/Menu.js'
import Testimonial from './components/Testimonial.js'
import Chefs from './components/Chefs.js'
import Footer from './components/Footer.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
