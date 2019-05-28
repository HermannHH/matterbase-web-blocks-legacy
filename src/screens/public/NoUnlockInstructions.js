import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/NoUnlockInstructions/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function NoUnlockInstructions(props) {
  return (
    <div>
      <CardForm />
      <AuthActionButtons />
    </div>
  );
}

NoUnlockInstructions.propTypes = {};

export default auth(NoUnlockInstructions);
