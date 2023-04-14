import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/Root';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "./store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <Root />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);