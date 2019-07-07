import httpRequest from 'utils/httpRequest';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function blocksList({ matterToken }) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks`,
    method: 'get'
  });
};

async function createBlock({
  matterToken,
  scopeType
}) {
  const data = {
    block: {
      matterToken,
      scope_type: scopeType
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks`,
    method: 'post',
    data
  });
};

async function destroyBlock({
  matterToken,
  token
}) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${token}`,
    method: 'delete'
  });
};


export {
  blocksList,
  createBlock,
  destroyBlock
};
