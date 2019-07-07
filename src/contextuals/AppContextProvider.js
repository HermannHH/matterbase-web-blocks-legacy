import React, { useState, useEffect } from 'react';

import { navigate } from '@reach/router';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';

import { signOut } from 'api/sessions';

import { getCookie } from 'utils/cookiesHelper';
import AppContext from './AppContext';

import Loading from 'components/Loading';

export default function AppContextProvider({ children }) {

  const [handshakeConfirmed, setConfirmHandshake] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  async function handleSignOut() {
    setLoading(true);
    await signOut();
    navigate(routes.public.home.path);
    setIsAuthenticated(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);

  }


  useEffect(() => {
    const authToken = getCookie('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    };
    setConfirmHandshake(true);
    setLoading(false);
  }, []);

  if (!handshakeConfirmed || loading) {
    return <Loading fullScreen/>;
  }

  return (
    <AppContext.Provider
      value={{
        data: {
          isAuthenticated
        },
        actions: {
          handleSignOut,
          setLoading,
          setIsAuthenticated
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
