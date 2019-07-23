import React from 'react';
import { Router } from '@reach/router';

import routes from 'routes';

import FourOhFour from 'screens/errors/FourOhFour'

// import Blocks from 'screens/private/Blocks';
// import ChangePassword from 'screens/private/ChangePassword';
// import Notepad from 'screens/private/Notepad';
// import TaskList from 'screens/private/TaskList';
import { Timeline, Onboarding } from 'screens/private';


function Private({ appContext }) {
  return (
    <Router>
      <Timeline path={routes.private.home.path} appContext={appContext}/>
      <Onboarding path={routes.private.onboarding.path} appContext={appContext}/>
      {/* <Blocks path={routes.private.blocks.path} appContext={appContext}/> */}
      {/* <FourOhFour default /> */}
    </Router>
  );
}

export default Private;
