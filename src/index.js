import React from 'react';
import ReactDOM from 'react-dom/client';
import Choose from './Choose';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Navbar />
    <Header />
    <Main/>
    <Choose />
  </React.StrictMode>
);
