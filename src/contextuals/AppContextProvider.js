import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppContextProvider({ children }) {
  const [state, setState] = useState({ isAuthenticated: true });

  const { isAuthenticated } = state;
  return (
    <AppContext.Provider
      value={{
        data: {
          isAuthenticated
        },
        actions: {}
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
