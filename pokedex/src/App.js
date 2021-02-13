import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;