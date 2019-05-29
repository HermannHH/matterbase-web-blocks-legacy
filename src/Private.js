import React from 'react';
import { Router } from '@reach/router';

import Blocks from 'screens/private/Blocks';
import ChangePassword from 'screens/private/ChangePassword';
import Notepad from 'screens/private/Notepad';
import TaskList from 'screens/private/TaskList';
import Timeline from 'screens/private/Timeline';


function Private() {
  return (
    <Router>
      <Timeline path="/" />
      <ChangePassword path="/change_password" />
      <Notepad path="/notepad" />
      <TaskList path="/task_list" />
      <Blocks path="/blocks" />
    </Router>
  );
}

export default Private;
