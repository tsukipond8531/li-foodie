import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const Root = createRoot(document.querySelector('#root'))

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
