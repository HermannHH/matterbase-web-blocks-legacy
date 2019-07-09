import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";

import { navigate } from '@reach/router';

import routes from 'routes';

import { confirmEmail } from 'api/users';


export default function ConfirmEmail({ confirmationToken, appContext: { data, actions } }) {


  async function handleConfirmEmail({ confirmationToken }) {
    await confirmEmail({  confirmationToken  });
    if (data.isAuthenticated) {
      await actions.handleGetCurrentUser();
      navigate(routes.private.home.path);
    } else {
      navigate(routes.public.login.path);
    }
    setTimeout(() => {
      actions.setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleConfirmEmail({ confirmationToken });
  }, []);

  return (
    <div id="confirm-email">
      <Helmet>
          <title>Matterbase | Confirm Account</title>
      </Helmet>
      <h4>Confirming Account...</h4>
    </div>
  )
}
