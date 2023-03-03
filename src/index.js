import React from 'react';
import ReactDOM from 'react-dom/client';
import States from './components/Countries';
import './index.css';
import Component from './components/styleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <States/>
    <Component/>
  </React.StrictMode>
);
