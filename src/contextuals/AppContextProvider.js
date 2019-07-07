import React, { useState, useEffect } from 'react';

import { navigate } from '@reach/router';

import routes from 'routes';

import { signOut } from 'api/sessions';
import { getCurrentUser } from 'api/users';

import { getCookie } from 'utils/cookiesHelper';
import AppContext from './AppContext';

import Loading from 'components/Loading';

export default function AppContextProvider({ children }) {

  const [handshakeConfirmed, setConfirmHandshake] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ isEmailVerified: null, email: null});


  async function handleSignOut() {
    setLoading(true);
    await signOut();
    setUser({
      email: null,
      isEmailVerified: null
    })
    navigate(routes.public.home.path);
    setIsAuthenticated(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };

  async function handleGetCurrentUser() {
    const resp = await getCurrentUser();
    setUser({
      email: resp.email,
      isEmailVerified: resp.is_email_verified
    });
  }


  useEffect(() => {
    const authToken = getCookie('authToken');
    if (authToken) {
      handleGetCurrentUser();
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
          isAuthenticated,
          user
        },
        actions: {
          handleSignOut,
          setLoading,
          setIsAuthenticated,
          handleGetCurrentUser
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
