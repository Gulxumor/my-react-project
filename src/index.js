import React from 'react';
import ReactDOM from 'react-dom/client';
import AddUser from './components/AddUser';
import CreateImage from './components/Div';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <CreateImage/>
    <AddUser/>
  </React.StrictMode>
);
