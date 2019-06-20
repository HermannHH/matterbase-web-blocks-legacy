import { createAction } from 'redux-act';

import apolloClient from 'apolloClient';

import { dataReduce } from 'utils/dataStructures';
import { listMatters } from './queries';

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
      console.log('request', data)
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

export default {
  fetchList,
  fetchListSuccess,
  fetchListFailure
};
