
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './modules/App/App';
import rootReducer from './state/State'; 

const store = createStore(rootReducer);

const rootElement = document.getElementById('app-root');
const root = ReactDOM.createRoot(rootElement!); 
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);