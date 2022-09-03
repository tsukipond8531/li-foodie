import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import LiFoodie from './Lifoodie';

const Root = createRoot(document.querySelector('#root'))

Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LiFoodie/>
    </BrowserRouter>
  </React.StrictMode>,
);
