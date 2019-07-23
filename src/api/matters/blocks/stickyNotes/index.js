import httpRequest from 'utils/httpRequest';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function createStickyNote({
  matterToken,
  blockToken,
  body
}) {
  const data = {
    sticky_note: {
      body
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes`,
    method: 'post',
    data
  });
};

async function destroyStickyNote({
  matterToken,
  blockToken,
  token
}) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes/${token}`,
    method: 'delete'
  });
};

async function updateStickyNote({
  matterToken,
  blockToken,
  token,
  body
}) {
  const data = {
    sticky_note: {
      body
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes/${token}`,
    method: 'patch',
    data
  });
};


export {
  createStickyNote,
  destroyStickyNote,
  updateStickyNote
};
