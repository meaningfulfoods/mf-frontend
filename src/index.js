import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Alert from "./assets/Alert/Alert";
import axios from 'axios'

const setupAxios = () => {

  // axios.defaults.baseURL = `http://localhost:8080/api`;
  axios.defaults.baseURL = `https://eager-pink-pelican.cyclic.app/api`;
  axios.defaults.headers = {
    'Cache-Control': 'no-cache,no-store',
    'Pragma': 'no-cache',
  };
};

setupAxios();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Alert />
      <App />
    </Provider>
  // </React.StrictMode>
);