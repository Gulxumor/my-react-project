import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import './index.css';
import Choose from './components/Choose.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Navbar />
    <Header />
    <Main />
    <Choose/>
  </React.StrictMode>
);
