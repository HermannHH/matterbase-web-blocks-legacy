import { matchPath } from 'react-router';

import routes from 'routes';

import {
  actions as matterActions,
} from 'ducks/matter';

import * as events from 'core/events';


function clearData(store) {
  store.dispatch(matterActions.resetList());
  store.dispatch(matterActions.resetEntity());
}

function findRoute(path) {
  const routeMatcher = Object.keys(routes).map((x) => {
    const isMatch = matchPath(path, {
      path: routes[x].path,
      exact: true,
      strict: false,
    });

    return {
      isMatch: isMatch !== null,
      key: x,
      route: isMatch,
    };
  });
  return routeMatcher.filter(r => r.isMatch === true)[0] || null;
};

function createStructuredRouteData(currentPath) {
  const data = findRoute(currentPath);
  if (data) {
    return {
      ...data,
      ...routes[data.key],
    };
  }
  return null;
};

function matterListRoutes() {
  return ['home'];
}

function matterEntityRoutes() {
  return ['blocks'];
}

const routerMiddleware = store => next => (action) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    clearData(store);
    const state = store.getState();
    const routeData = createStructuredRouteData(action.payload.location.pathname);
    if (matterListRoutes().includes(routeData.key)) {
      store.dispatch(matterActions.fetchList());
      store.dispatch(events.mattersEvents.listMattersRequest());
    };


    if (matterEntityRoutes().includes(routeData.key)) {
      store.dispatch(matterActions.fetchEntity({ token: routeData.route.params.matterId }));
    // console.log('routeData', routeData.route.params.matterId)
    };
    
  }
  next(action);
};

export default routerMiddleware;
