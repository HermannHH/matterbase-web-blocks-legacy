import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function mattersList() {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters`,
    method: 'get'
  });
};

async function createMatter({
  title
}) {
  const data = {
    matter: {
      title
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters`,
    method: 'post',
    data
  });
};

async function destroyMatter({
  token
}) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${token}`,
    method: 'delete'
  });
};

async function updateMatter({
  token,
  title
}) {
  const data = {
    matter: {
      title
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${token}`,
    method: 'patch',
    data
  });
};


export {
  mattersList,
  createMatter,
  destroyMatter,
  updateMatter
};
