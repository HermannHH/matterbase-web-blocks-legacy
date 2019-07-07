import React from 'react';
import { Router } from '@reach/router';
import routes from 'routes';

import Home from 'screens/public/Home';
import AboutUs from 'screens/public/AboutUs';
import Pricing from 'screens/public/Pricing';
import Login from 'screens/public/Login';
import Register from 'screens/public/Register';
import ForgotPassword from 'screens/public/ForgotPassword';
import ResetPassword from 'screens/public/ResetPassword';


function Public({ appContext }) {
  return (
    <Router>
      <Home path={routes.public.home.path} appContext={appContext} />
      <AboutUs path={routes.public.aboutUs.path} appContext={appContext} />
      <Pricing path={routes.public.pricing.path} appContext={appContext} />
      <Login path={routes.public.login.path} appContext={appContext} />
      <Register path={routes.public.register.path} appContext={appContext} />
      <ForgotPassword path={routes.public.forgotPassword.path} appContext={appContext} />
      <ResetPassword path={routes.public.resetPassword.path} appContext={appContext} />
    </Router>
  );
}

export default Public;
