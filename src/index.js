import React from 'react';
import ReactDOM from 'react-dom/client';
import States from './components/Countries';
// import FindState from './components/homework';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    {/* <FindState /> */}
    <States/>
  </React.StrictMode>
);
