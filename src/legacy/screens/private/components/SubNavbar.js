import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { push } from 'connected-react-router';

import { useDispatch } from 'react-redux';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';

function SubNavbar({ token }) {

  const dispatch = useDispatch();

  return (
    <div id="sub-navbar">
      <a id="sub-navbar--title" onClick={() => dispatch(push(routes.home.path))}><FontAwesomeIcon icon={faArrowLeft} /> Back</a>
      <div id="sub-navbar--actions">

      </div>
    </div>
  )
}

export default SubNavbar;
