import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { navigate } from '@reach/router';

import routes from 'routes';

function SubNavbar({ token }) {

  return (
    <div id="sub-navbar">
      <a id="sub-navbar--title" style={{ cursor: "pointer"}} onClick={() => navigate(routes.private.home.path)}><FontAwesomeIcon icon={faArrowLeft} /> Back</a>
      <div id="sub-navbar--actions">

      </div>
    </div>
  )
}

export default SubNavbar;
