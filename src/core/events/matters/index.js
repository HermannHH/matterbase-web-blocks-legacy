import { createAction } from 'redux-act';

const listMattersRequest = createAction('Triggers request for list matters flow');
const listMattersRequestSuccess = createAction('listMattersRequest has succeeded', ({ data }) => ({ data }));
const listMattersRequestFailure = createAction('listMattersRequest has failed', ({ data }) => ({ data }));

const showMatterRequest = createAction('Triggers request for show matter flow');
const showMatterRequestSuccess = createAction('showMatterRequest has succeeded', ({ data }) => ({ data }));
const showMatterRequestFailure = createAction('showMatterRequest has failed', ({ data }) => ({ data }));

const createMatterRequest = createAction('Triggers request for create matter flow');
const createMatterRequestSuccess = createAction('createMatterRequest has succeeded', ({ data }) => ({ data }));
const createMatterRequestFailure = createAction('createMatterRequest has failed', ({ data }) => ({ data }));

const destroyMatterRequest = createAction('Triggers request for destroy matter flow');
const destroyMatterRequestSuccess = createAction('destroyMatterRequest has succeeded', ({ data }) => ({ data }));
const destroyMatterRequestFailure = createAction('destroyMatterRequest has failed', ({ data }) => ({ data }));

const updateMatterRequest = createAction('Triggers request for update matter flow');
const updateMatterRequestSuccess = createAction('updateMatterRequest has succeeded', ({ data }) => ({ data }));
const updateMatterRequestFailure = createAction('updateMatterRequest has failed', ({ data }) => ({ data }));

const resetMatters = createAction('Triggers request for reset matters flow');

export {
  listMattersRequest,
  listMattersRequestSuccess,
  listMattersRequestFailure,
  showMatterRequest,
  showMatterRequestSuccess,
  showMatterRequestFailure,
  createMatterRequest,
  createMatterRequestSuccess,
  createMatterRequestFailure,
  destroyMatterRequest,
  destroyMatterRequestSuccess,
  destroyMatterRequestFailure,
  updateMatterRequest,
  updateMatterRequestSuccess,
  updateMatterRequestFailure,
  resetMatters
}
