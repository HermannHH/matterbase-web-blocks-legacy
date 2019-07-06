import React from 'react';
import { Router } from '@reach/router';

import routes from 'routes';


// import Blocks from 'screens/private/Blocks';
// import ChangePassword from 'screens/private/ChangePassword';
// import Notepad from 'screens/private/Notepad';
// import TaskList from 'screens/private/TaskList';
import { Timeline, Blocks, Onboarding } from 'screens/private';


function Private() {
  return (
    <Router>
      <Timeline path={routes.private.home.path} />
      <Onboarding path={routes.private.onboarding.path} />
      <Blocks path={routes.private.blocks.path} />
    </Router>
  );
}

export default Private;
