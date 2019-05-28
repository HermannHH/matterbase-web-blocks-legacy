import React from 'react';
import { Router } from '@reach/router';
import routes from 'routes';

import Home from 'screens/public/Home';
import AboutUs from 'screens/public/AboutUs';
import Pricing from 'screens/public/Pricing';
import Login from 'screens/public/Login';
import Register from 'screens/public/Register';
import ForgotPassword from 'screens/public/ForgotPassword';
import NoUnlockInstructions from 'screens/public/NoUnlockInstructions';
import NoConfirmationInstructions from 'screens/public/NoConfirmationInstructions';
import ResetPassword from 'screens/public/ResetPassword';

function Public() {
  return (
    <Router>
      <Home path={routes.public.home.path} />
      <AboutUs path={routes.public.aboutUs.path} />
      <Pricing path={routes.public.pricing.path} />
      <Login path={routes.public.login.path} />
      <Register path={routes.public.register.path} />
      <ForgotPassword path={routes.public.forgotPassword.path} />
      <NoConfirmationInstructions path={routes.public.noConfirmationInstructions.path} />
      <NoUnlockInstructions path={routes.public.noUnlockInstructions.path} />
      <ResetPassword path={routes.public.resetPassword.path} />
    </Router>
  );
}

export default Public;
