import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/ResetPassword/CardForm';

function ResetPassword(props) {
  return (
    <div>
      <CardForm />
    </div>
  );
}

ResetPassword.propTypes = {};

export default auth(ResetPassword);
