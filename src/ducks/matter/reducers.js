import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import actions from './actions';

const fetchListCompleted = createReducer({
  [actions.fetchListSuccess]: () => true,
  // [actions.resetList]: () => false,
}, false);

const keyedArray = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    console.log('payload', payload.data.indexedObject)
    return payload.data.indexedObject
  },
  // [actions.resetList]: () => false,
}, []);

const indexedObject = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    return payload.data.keyedArray
  },
  // [actions.resetList]: () => false,
}, {});


const list = combineReducers({
  keyedArray,
  indexedObject
});

export default combineReducers({
  fetchListCompleted,
  list
});
