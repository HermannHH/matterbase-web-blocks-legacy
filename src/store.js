// import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { routerReducer, routerMiddleware as reactRouterReduxMiddleware } from 'react-router-redux';
// import { autoRehydrate } from 'redux-persist';
// import createActionBuffer from 'redux-action-buffer';
// import reduxReset from 'redux-reset';
import thunk from 'redux-thunk';
// import { REHYDRATE } from 'redux-persist/constants';
// import { routerMiddleware } from './middlewares';


import {
  matter
} from './ducks';

// import {
//   actions as authActions,
// } from './ducks/auth';


// console.log('auth reducer', testtest1)

// export const history = createHistory();
const rootReducer = combineReducers({
  matter,
  // apollo: apolloClient.reducer(),
});

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk
  ),
  // reduxReset(),
  // autoRehydrate(),
);

const store = createStore(rootReducer, {}, enhancer);

export default store;
