import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function mattersList() {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters`,
    method: 'get'
  });
};

async function matterShow({
  token
}) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${token}`,
    method: 'get'
  });
};

async function createMatter({
  title,
  startAt,
  endAt,
  embeddable
}) {
  const data = {
    matter: {
      title,
      start_at: startAt,
      end_at: endAt,
      embeddable
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
  title,
  startAt,
  endAt,
  embeddable
}) {
  const data = {
    matter: {
      title,
      start_at: startAt,
      end_at: endAt,
      embeddable
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
  matterShow,
  createMatter,
  destroyMatter,
  updateMatter
};
