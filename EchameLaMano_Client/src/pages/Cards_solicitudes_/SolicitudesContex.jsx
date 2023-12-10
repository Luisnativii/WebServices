import React, { createContext, useState, useContext } from 'react';

const SolicitudesContext = createContext();

export const SolicitudesProvider = ({ children }) => {
  const [solicitudes, setSolicitudes] = useState([]);

  const agregarSolicitud = (nuevaSolicitud) => {
    setSolicitudes([...solicitudes, nuevaSolicitud]);
  };

  return (
    <SolicitudesContext.Provider value={{ solicitudes, agregarSolicitud }}>
      {children}
    </SolicitudesContext.Provider>
  );
};

export const useSolicitudes = () => {
  const context = useContext(SolicitudesContext);
  if (!context) {
    throw new Error('useDonaciones debe ser utilizado dentro de un DonacionesProvider');
  }
  return context;
};