import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import LiFoodie from './Lifoodie';

function App() {
  return (
    <> 
      <BrowserRouter>
        <LiFoodie/>
      </BrowserRouter>
    </>
  );
}

export default App;
