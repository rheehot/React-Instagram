import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import 'reset-css';
import './index.css';
import createStore from './redux/create';
import { Provider } from 'react-redux';

const store = createStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);