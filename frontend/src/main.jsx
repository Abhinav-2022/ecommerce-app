import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ShopcontextProvider from './context/Shopcontext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>
  </BrowserRouter>
);
