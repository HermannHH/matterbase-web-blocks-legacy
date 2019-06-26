import { createAction } from 'redux-act';

import apolloClient from 'apolloClient';

import { dataReduce } from 'utils/dataStructures';
import { listMatters, showEntity } from './queries';
import {
  matterCreate,
  matterDelete,
  matterUpdate,
  blockCreate
} from './mutations';

// Fetch List
const fetchListRequest = createAction('Fetch matter list query call started.');
const fetchListSuccess = createAction('Fetch matter list query success.', ({ data }) => ({ data }));
const fetchListFailure = createAction('Fetch matter list query failure.', ({ data }) => ({ data }));
function fetchList() {
  return async (dispatch) => {
    dispatch(fetchListRequest());
    try {
      const { data } = await apolloClient.query({
        query: listMatters
      });
      console.log('request', data.matters)
      dispatch(fetchListSuccess({
        data: dataReduce(data.matters, 'token'),
      }));
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(fetchListFailure({
        ...err,
      }));
    }
  };
};

// Reset List
const resetList = createAction('Resets matter list to original state');

// Create Matter
const createRequest = createAction('Create matter list mutation call started.');
const createSuccess = createAction('Create matter list mutation success.', ({ data }) => ({ data }));
const createFailure = createAction('Create matter list mutation failure.', ({ data }) => ({ data }));
function create({ title }) {
  return async (dispatch) => {
    dispatch(createRequest());
    try {
      const { data } = await apolloClient.mutate({
        variables: { title },
        mutation: matterCreate
      })
      // console.log('request', data)
      dispatch(createSuccess({
        data: data.matterCreate.matter,
      }));
      // console.log('apolloClient', apolloClient)
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(createFailure({
        ...err,
      }));
    }
  };
};

// Delete Matter
const destroyRequest = createAction('Destroy matter list mutation call started.');
const destroySuccess = createAction('Destroy matter list mutation success.', ({ data }) => ({ data }));
const destroyFailure = createAction('Destroy matter list mutation failure.', ({ data }) => ({ data }));
function destroy({ token }) {
  return async (dispatch) => {
    dispatch(destroyRequest());
    try {
      const { data } = await apolloClient.mutate({
        variables: { token },
        mutation: matterDelete
      })
      console.log('request', data)
      dispatch(destroySuccess({
        data: data.matterDelete.matter,
      }));
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(destroyFailure({
        ...err,
      }));
    }
  };
};

// Update Matter
const updateRequest = createAction('Update matter list mutation call started.');
const updateSuccess = createAction('Update matter list mutation success.', ({ data }) => ({ data }));
const updateFailure = createAction('Update matter list mutation failure.', ({ data }) => ({ data }));
function update({ token, title }) {
  return async (dispatch) => {
    dispatch(updateRequest());
    try {
      const { data } = await apolloClient.mutate({
        variables: { token, title },
        mutation: matterUpdate
      })
      console.log('request', data)
      dispatch(updateSuccess({
        data: data.matterUpdate.matter,
      }));
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(updateFailure({
        ...err,
      }));
    }
  };
};



// Fetch Entity
const fetchEntityRequest = createAction('Fetch matter entity query call started.');
const fetchEntitySuccess = createAction('Fetch matter entity query success.', ({ data }) => ({ data }));
const fetchEntityFailure = createAction('Fetch matter entity query failure.', ({ data }) => ({ data }));
function fetchEntity({ token }) {
  return async (dispatch) => {
    dispatch(fetchEntityRequest());
    try {
      const { data } = await apolloClient.query({
        query: showEntity,
        variables: { token },
      });
      console.log('request', data)
      dispatch(fetchEntitySuccess({
        data: data.matter,
      }));
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(fetchEntityFailure({
        ...err,
      }));
    }
  };
};


// Reset Entity
const resetEntity = createAction('Resets matter entity to original state');


// Create Block
const createBlockRequest = createAction('Create block list mutation call started.');
const createBlockSuccess = createAction('Create block list mutation success.', ({ data }) => ({ data }));
const createBlockFailure = createAction('Create block list mutation failure.', ({ data }) => ({ data }));
function createBlock({ matterToken, scopeType }) {
  return async (dispatch) => {
    dispatch(createBlockRequest());
    try {
      const { data } = await apolloClient.mutate({
        variables: { matterToken, scopeType },
        mutation: blockCreate
      })
      console.log('request', data)
      dispatch(createBlockSuccess({
        data: data.blockCreate.block,
      }));
      // console.log('apolloClient', apolloClient)
    } catch (err) {
      console.log('errrrrr', err)
      dispatch(createBlockFailure({
        ...err,
      }));
    }
  };
};

export default {
  fetchList,
  fetchListSuccess,
  fetchListFailure,
  resetList,
  // 
  create,
  createSuccess,
  createFailure,
  // 
  destroy,
  destroySuccess,
  destroyFailure,
  // 
  update,
  updateSuccess,
  updateFailure,
  // 
  fetchEntity,
  fetchEntitySuccess,
  fetchEntityFailure,
  //
  resetEntity,
  // 
  createBlock,
  createBlockSuccess,
  createBlockFailure,
};
