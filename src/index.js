import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/global.css'
import { BrowserRouter } from 'react-router-dom';
import LiFoodie from './Lifoodie_App';

const Root = createRoot(document.querySelector('#root'))

Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LiFoodie/>
    </BrowserRouter>
  </React.StrictMode>,
);
