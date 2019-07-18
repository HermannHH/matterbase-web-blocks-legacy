import React, { useState, useEffect, Fragment } from 'react';
// import { ToastProvider, useToasts } from 'react-toast-notifications';
import axios from 'axios';
import { navigate } from '@reach/router';

import { setCookie, deleteCookie } from "utils/cookiesHelper";

import routes from 'routes';

import { signOut } from 'api/sessions';
import { getCurrentUser } from 'api/users';

import { getCookie } from 'utils/cookiesHelper';
import errorHandler from 'utils/errorHandler';
import AppContext from './AppContext';

import Loading from 'components/Loading';



function AppContextProvider({ children, triggerSoftSignOut, unsetTriggerSoftSignOut }) {

  const [handshakeConfirmed, setConfirmHandshake] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserSet, setIsUserSet] = useState(false);
  const [user, setUser] = useState({ isEmailVerified: null, email: null, profileCompleted: null, profile: {
    firstName: null,
    lastName: null,
    timezone: null,
  },
  });

  // const { addToast } = useToasts();

  // console.log('triggerSoftSignOut', rest)


  async function handleSignOut(softSignOut) {
    setLoading(true);
    if(!softSignOut) {
      await signOut();
    }
    await deleteCookie("authToken");
    setUser({
      email: null,
      isEmailVerified: null
    })
    navigate(routes.public.home.path);
    setIsAuthenticated(false);
    setIsUserSet(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };


  async function handleOnboardRedirect({ profileCompleted, nextPath }) {
    const currentPath = window.location.pathname;
    if (!profileCompleted && currentPath !== routes.private.onboarding.path ) {
      navigate(routes.private.onboarding.path);
    } else if (profileCompleted && currentPath === routes.private.onboarding.path) {
      navigate(routes.private.home.path);
    } else if (nextPath) {
      navigate(nextPath);
    };
  }

  async function handleGetCurrentUser({ nextPath }) {
    try {
      const resp = await getCurrentUser();
      setUser({
        email: resp.email,
        isEmailVerified: resp.is_email_verified,
        profileCompleted: resp.profile_completed,
        profile: {
          firstName: resp.profile.first_name,
          lastName: resp.profile.last_name,
          timezone: resp.profile.timezone,
        }
      });
      setIsUserSet(true);
      await handleOnboardRedirect({ profileCompleted: resp.profile_completed, nextPath });
    } catch (error) {
      console.log('handleGetCurrentUser')
    }
  };

  useEffect(() => {
    const authToken = getCookie('authToken');
    if (authToken) {
      handleGetCurrentUser({});
      setIsAuthenticated(true);
      setConfirmHandshake(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    } else {
      setIsAuthenticated(false);
      setConfirmHandshake(true);
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    if(triggerSoftSignOut) {
      handleSignOut(true);
      unsetTriggerSoftSignOut();
    }
  }, [triggerSoftSignOut])

  // function showToast({ message, type }) {
  //   addToast(message, { appearance: type });
  // };

  let renderSection = <Loading fullScreen/>
      
  if (handshakeConfirmed && !loading && (isAuthenticated ? isUserSet : !isUserSet)) {
   renderSection = ( <AppContext.Provider
        value={{
          data: {
            isAuthenticated,
            user
          },
          actions: {
            handleSignOut,
            setLoading,
            setIsAuthenticated,
            handleGetCurrentUser,
            // showToast
          }
        }}
      >
        {children}
      </AppContext.Provider>
   );
  };

  // if (!handshakeConfirmed || loading || (isAuthenticated && !isUserSet)) {
  //   return <Loading fullScreen/>;
  // }

  return (
    <Fragment>
      {renderSection}
    </Fragment>
  );
};




export default errorHandler(AppContextProvider);
