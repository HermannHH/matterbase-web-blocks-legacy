import React from 'react';
// import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import { navigate } from '@reach/router';

import routes from 'routes';

import { resetPassword } from 'api/passwords';


import CardForm from 'screens/public/ResetPassword/CardForm';

function ResetPassword({ resetPasswordToken }) {

  async function handleResetPassword({ resetPasswordToken, password, passwordConfirmation }) {
    const data = await resetPassword({ resetPasswordToken, password, passwordConfirmation });
    navigate(routes.public.login.path);
  };

  // useEffect(() => {
  //   handleConfirmEmail({ confirmationToken });
  // }, []);

  return (
    <div className="selago-background">
      <Helmet>
          <title>Matterbase | Reset Password</title>
      </Helmet>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center min-full-height">
          <div className="col-10 col-md-6 col-lg-4">
            <CardForm handleResetPassword={handleResetPassword} resetPasswordToken={resetPasswordToken}/>
          </div>
        </div>
      </div>
    </div>
  );
}

ResetPassword.propTypes = {};

export default ResetPassword;
