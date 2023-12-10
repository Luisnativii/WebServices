import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { SolicitudesProvider } from './pages/Cards_solicitudes_/SolicitudesContex.jsx';
import { DonacionesProvider } from './pages/Cards-donaciones_/DonacionesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <SolicitudesProvider>
      <DonacionesProvider>
        <App />
        </DonacionesProvider>
      </SolicitudesProvider>
      </BrowserRouter>
  </React.StrictMode>
);