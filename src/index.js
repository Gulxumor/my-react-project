import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './components/username';
import ShapeCreator from './components/Div.jsx';
import AddUser from './components/AddUser';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Table />
    <AddUser />
    < ShapeCreator/>
  </React.StrictMode>
);
