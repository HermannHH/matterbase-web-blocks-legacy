import React from 'react';
import { Router } from '@reach/router';
import routes from 'routes';

import Home from 'screens/public/Home';
import AboutUs from 'screens/public/AboutUs';
import Pricing from 'screens/public/Pricing';
import Login from 'screens/public/Login';
import Register from 'screens/public/Register';

function Public() {
  return (
    <Router>
      <Home path={routes.public.home.path} />
      <AboutUs path={routes.public.aboutUs.path} />
      <Pricing path={routes.public.pricing.path} />
      <Login path={routes.public.login.path} />
      <Register path={routes.public.register.path} />
    </Router>
  );
}

export default Public;
