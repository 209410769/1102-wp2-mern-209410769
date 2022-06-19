import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_69 from './App_69';
import { AppProvider_69 } from './context/appContext_69'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_69>
      <App_69 />
    </AppProvider_69>
  </React.StrictMode>,
  document.getElementById('root')
);