import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import Root from './root/Root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Root/>
    </div>
    <Root />
  </React.StrictMode>
);
