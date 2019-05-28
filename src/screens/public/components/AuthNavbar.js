import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import routes from 'routes';


function AuthNavbar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-light sticky-top selago-background">
    <a className="navbar-brand"><FontAwesomeIcon icon={faArrowLeft} /> Back Home</a>
  </nav>

  );
}

export default AuthNavbar;
