import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';

function SubNavbar({ token }) {

  return (
    <div id="sub-navbar">
      <a id="sub-navbar--title" href={replaceUrlParams(':matterId', routes.private.blocks.path, token)}><FontAwesomeIcon icon={faArrowLeft} /> Back</a>
      <div id="sub-navbar--actions">

      </div>
    </div>
  )
}

export default SubNavbar;
