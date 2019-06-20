import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import actions from './actions';

import { appendToKeyedArray, writeToIndexedObject, removeFromKeyedArray, removeFromIndexedObject } from 'utils/dataStructures';

const fetchListCompleted = createReducer({
  [actions.fetchListSuccess]: () => true,
  // [actions.resetList]: () => false,
}, false);

const keyedArray = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    return payload.data.keyedArray;
  },
  [actions.createSuccess]: (state, payload) => appendToKeyedArray(state, payload.data.token),
  [actions.destroySuccess]: (state, payload) => removeFromKeyedArray(state, payload.data.token),
}, []);

const indexedObject = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    return payload.data.indexedObject;
  },
  [actions.createSuccess]: (state, payload) => writeToIndexedObject(state, payload.data.token, payload.data),
  [actions.updateSuccess]: (state, payload) => writeToIndexedObject(state, payload.data.token, payload.data),
  [actions.destroySuccess]: (state, payload) => removeFromIndexedObject(state, payload.data.token),
}, {});


const list = combineReducers({
  fetchListCompleted,
  keyedArray,
  indexedObject
});

export default combineReducers({
  list
});
