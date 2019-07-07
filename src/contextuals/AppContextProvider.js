import React, { useState, useEffect } from 'react';

import { getCookie } from 'utils/cookiesHelper';
import AppContext from './AppContext';

import Loading from 'components/Loading';

export default function AppContextProvider({ children }) {

  const [handshakeConfirmed, setConfirmHandshake] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const authToken = getCookie('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    };
    setConfirmHandshake(true);
  }, []);

  if (!handshakeConfirmed) {
    return <Loading fullScreen/>;
  }

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
