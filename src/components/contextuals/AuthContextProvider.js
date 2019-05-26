import React, { useState } from 'react';
import AuthContext from './AuthContext';

export default function AuthContextProvider({ children }) {
  const [state, setState] = useState({ isAuthenticated: false });

  const { isAuthenticated } = state;
  return (
    <AuthContext.Provider
      value={{
        data: {
          isAuthenticated
        },
        actions: {}
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
