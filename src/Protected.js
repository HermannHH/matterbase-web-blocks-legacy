import React, {Fragment} from 'react';
import { Router } from '@reach/router';
import routes from 'routes';

import ConfirmEmail from 'screens/protected/ConfirmEmail';



function Protected({ appContext }) {
  return (
    <Router>
      <ConfirmEmail path={routes.protected.confirmEmail.path} appContext={appContext} />
    </Router>
  );
}

export default Protected;
