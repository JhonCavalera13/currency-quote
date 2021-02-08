import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './core/store';
import './styles/styles.scss'
import { Provider } from 'react-redux';
import { MainApp } from './MainApp';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <MainApp/>
    </Provider>,
  document.getElementById('root')
);

