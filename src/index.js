import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import ContextApi from './context'

ReactDOM.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>,
  document.getElementById('root')
);
