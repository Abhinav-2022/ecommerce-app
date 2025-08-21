import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter }from 'react-router-dom'
import shopcontextProvider from './context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  
  
  <BrowserRouter>
  <shopcontextProvider>
    <App />
    </shopcontextProvider>
    
  </BrowserRouter >,
)
