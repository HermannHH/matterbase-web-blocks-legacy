import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware as connectedRouterMiddleware, connectRouter } from 'connected-react-router';
// import { routerReducer, routerMiddleware as reactRouterReduxMiddleware } from 'react-router-redux';
// import { autoRehydrate } from 'redux-persist';
// import createActionBuffer from 'redux-action-buffer';
// import reduxReset from 'redux-reset';
import thunk from 'redux-thunk';
// import { REHYDRATE } from 'redux-persist/constants';
import routerMiddleware from './middlewares/routerMiddleware';
import rootSaga from './core/sagas';


import {
  matter
} from './ducks';

// import {
//   actions as authActions,
// } from './ducks/auth';


// console.log('auth reducer', testtest1)

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  matter,
  router: connectRouter(history),
  // apollo: apolloClient.reducer(),
});

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
    connectedRouterMiddleware(history),
    routerMiddleware,
    sagaMiddleware,
  ),
  // reduxReset(),
  // autoRehydrate(),
);

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
