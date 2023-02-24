import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './components/Age';
import DollarToSum from './components/DollarTransfer';
import Calculator from './components/Calculator';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='main'>
      <ClassComponent />
      <DollarToSum />
      <Calculator />
    </div>
  </React.StrictMode>
);
