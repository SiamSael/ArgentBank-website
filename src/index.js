import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import {store, persistor} from './utils/store';
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
