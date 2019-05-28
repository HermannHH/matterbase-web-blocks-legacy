import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

Login.propTypes = {};

export default auth(Login);
