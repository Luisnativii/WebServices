import React, { createContext, useState, useContext } from 'react';

const DonacionesContext = createContext();

export const DonacionesProvider = ({ children }) => {
  const [donaciones, setDonaciones] = useState([]);

  const agregarDonacion = (nuevaDonacion) => {
    setDonaciones([...donaciones, nuevaDonacion]);
  };

  return (
    <DonacionesContext.Provider value={{ donaciones, agregarDonacion }}>
      {children}
    </DonacionesContext.Provider>
  );
};

export const useDonaciones = () => {
  const context = useContext(DonacionesContext);
  if (!context) {
    throw new Error('useDonaciones debe ser utilizado dentro de un DonacionesProvider');
  }
  return context;
};