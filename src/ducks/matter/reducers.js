import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import _ from 'lodash';

import actions from './actions';


import { dataReduce } from 'utils/dataStructures';

import { appendToKeyedArray, writeToIndexedObject, removeFromKeyedArray, removeFromIndexedObject } from 'utils/dataStructures';

const fetchListCompleted = createReducer({
  [actions.fetchListSuccess]: () => true,
  [actions.resetList]: () => false,
}, false);

const keyedArray = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    return payload.data.keyedArray;
  },
  [actions.createSuccess]: (state, payload) => appendToKeyedArray(state, payload.data.token),
  [actions.destroySuccess]: (state, payload) => removeFromKeyedArray(state, payload.data.token),
  [actions.resetList]: () => ([]),
}, []);

const indexedObject = createReducer({
  [actions.fetchListSuccess]: (state, payload) => {
    return payload.data.indexedObject;
  },
  [actions.createSuccess]: (state, payload) => writeToIndexedObject(state, payload.data.token, payload.data),
  [actions.updateSuccess]: (state, payload) => writeToIndexedObject(state, payload.data.token, payload.data),
  [actions.destroySuccess]: (state, payload) => removeFromIndexedObject(state, payload.data.token),
  [actions.resetList]: () => ({}),
}, {});


// Entity
const fetchEntityCompleted = createReducer({
  [actions.fetchEntitySuccess]: () => true,
  [actions.resetEntity]: () => false,
}, false);


const content = createReducer({
  [actions.fetchEntitySuccess]: (state, payload) => _.omit(payload.data, 'blocks'),
  [actions.resetEntity]: () => ({}),
}, {});


const blocksKeyedArray = createReducer({
  [actions.fetchEntitySuccess]: (state, payload) => {
    const data = dataReduce(payload.data.blocks, 'token');
    return data.keyedArray;
  },
  [actions.createBlockSuccess]: (state, payload) => appendToKeyedArray(state, payload.data.token),
  [actions.resetEntity]: () => ([]),
}, []);

const blocksIndexedObject = createReducer({
  [actions.fetchEntitySuccess]: (state, payload) => {
    const data = dataReduce(payload.data.blocks, 'token');
    return data.indexedObject;
  },
  [actions.createBlockSuccess]: (state, payload) => writeToIndexedObject(state, payload.data.token, payload.data),
  [actions.resetEntity]: () => ({}),
}, {});

const list = combineReducers({
  fetchListCompleted,
  keyedArray,
  indexedObject
});


const entity = combineReducers({
  fetchEntityCompleted,
  content,
  blocksKeyedArray,
  blocksIndexedObject
});

export default combineReducers({
  list,
  entity
});
