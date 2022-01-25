import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MouseContextProvider from './context/mouse-context.js';

ReactDOM.render(
  <MouseContextProvider>
      <App />
  </MouseContextProvider>,
  document.getElementById('root')
);