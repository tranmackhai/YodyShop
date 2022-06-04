import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/_style.scss'
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


