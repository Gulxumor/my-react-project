import React from 'react';
import ReactDOM from 'react-dom/client';
import AddUser from './components/AddUser.jsx';
import ShapeCreator from './components/Div.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <AddUser/>
    < ShapeCreator/>
  </React.StrictMode>
);
