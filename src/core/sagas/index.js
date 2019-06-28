import { all, takeLatest, takeEvery } from 'redux-saga/effects';

// Events
import * as events from 'core/events';

// import {
//   actions as matterActions
// } from 'ducks/matter';


// Sagas
import * as matterSagas from './matters';

export default function* index() {
  yield all([
    // takeLatest([actions.blocksActions.resetList, matterActions.resetList], showBlocks),
    takeLatest([events.mattersEvents.listMattersRequest], matterSagas.listMattersRequest),
  ]);
};
