import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs/About';
import Partners from './components/Partner/Partners';
import Footer from './components/Footer/Footers';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LandingPage />
    <AboutUs />
    <Partners />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
