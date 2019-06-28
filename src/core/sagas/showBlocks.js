import {
  put,
} from 'redux-saga/effects';


export default function* set(action) {
  try {
    // console.log('action', action)
    // yield put(viewPortActions.set.success({
    //   width: action.payload.width,
    //   height: action.payload.height,
    //   device: action.payload.device,
    // }));
    console.log('saga launched')
  } catch (error) {
    // yield put(viewPortActions.set.failure(error));
  } finally {
    // yield put(viewPortActions.set.fulfill());
  }
};
