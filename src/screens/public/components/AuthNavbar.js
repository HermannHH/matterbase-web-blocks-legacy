import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { navigate } from '@reach/router';

import routes from 'routes';


function AuthNavbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light sticky-top selago-background">
    <a className="navbar-brand" style={{ cursor: "pointer"}} onClick={() => navigate(routes.public.home.path)}><FontAwesomeIcon icon={faArrowLeft} /> Back Home</a>
  </nav>

  );
}

export default AuthNavbar;
