import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chairs from './components/Chairs';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Choose from './components/Choose.jsx';
import Position from './components/Position.jsx';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Navbar />
    <Header />
    <Main />
    <Choose />
    <Position />
    <Chairs />
    <Testimonials />
    <Blog />
    <Newsletter />
    <Footer />
    <Copyright />
  </React.StrictMode>
);
