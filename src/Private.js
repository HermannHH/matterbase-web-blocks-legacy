import React from 'react';
import { Router } from '@reach/router';
import { Route, Switch } from 'react-router';

import routes from 'routes';


import Blocks from 'screens/private/Blocks';
import ChangePassword from 'screens/private/ChangePassword';
import Notepad from 'screens/private/Notepad';
import TaskList from 'screens/private/TaskList';
import Timeline from 'screens/private/Timeline';


function Private() {
  return (
    <Switch>
      <Route exact path={routes.home.path} render={() => (<Timeline />)} />
      <Route exact path={routes.blocks.path} render={() => (<Blocks />)} />
    </Switch>
  );
}

export default Private;
