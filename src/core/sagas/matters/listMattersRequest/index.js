import {
  put,
  call
} from 'redux-saga/effects';
import apolloClient from 'apolloClient';
import _ from 'lodash';

import { dataReduce } from 'utils/dataStructures';
import { mattersQueries } from 'core/queries';


export default function* set(action) {
  try {

    const resp = yield call({
      fn: apolloClient.query,
      query: mattersQueries.list
    });
    console.log('respppppp in saga', apolloClient.query)
    // console.log('action', action)
    // yield put(viewPortActions.set.success({
    //   width: action.payload.width,
    //   height: action.payload.height,
    //   device: action.payload.device,
    // }));
    console.log('listMattersRequestSaga launched')
  } catch (error) {
    // yield put(viewPortActions.set.failure(error));
    console.log('errrr', error)
  } finally {
    // yield put(viewPortActions.set.fulfill());
  }
};
