import React from 'react';
import { Router } from '@reach/router';

import routes from 'routes';


// import Blocks from 'screens/private/Blocks';
// import ChangePassword from 'screens/private/ChangePassword';
// import Notepad from 'screens/private/Notepad';
// import TaskList from 'screens/private/TaskList';
import { Timeline } from 'screens/private';


function Private() {
  return (
    <Router>
      <Timeline path={routes.private.home.path} />
    </Router>
  );
}

export default Private;
