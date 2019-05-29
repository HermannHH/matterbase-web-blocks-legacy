import React from 'react';
import { Router } from '@reach/router';

import routes from 'routes';


import Blocks from 'screens/private/Blocks';
import ChangePassword from 'screens/private/ChangePassword';
import Notepad from 'screens/private/Notepad';
import TaskList from 'screens/private/TaskList';
import Timeline from 'screens/private/Timeline';


function Private() {
  return (
    <Router>
      <Timeline path={routes.home.path} />
      {/* <ChangePassword path="/change_password" /> */}
      <Notepad path={routes.private.notepad.path} />
      <TaskList path={routes.private.tasklist.path} />
      <Blocks path={routes.private.blocks.path} />
    </Router>
  );
}

export default Private;
