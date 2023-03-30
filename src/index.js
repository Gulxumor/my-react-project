import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Root />
    </div>
  </React.StrictMode>
);
