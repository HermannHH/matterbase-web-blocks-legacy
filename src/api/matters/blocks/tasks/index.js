import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function createTask({
  matterToken,
  blockToken,
  body
}) {
  const data = {
    task: {
      body
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks`,
    method: 'post',
    data
  });
};

async function destroyTask({
  matterToken,
  blockToken,
  token
}) {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks/${token}`,
    method: 'delete'
  });
};

async function updateTask({
  matterToken,
  blockToken,
  token,
  body,
  isCompleted
}) {
  const data = {
    task: {
      body,
      is_completed: isCompleted
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks/${token}`,
    method: 'patch',
    data
  });
};


export {
  createTask,
  destroyTask,
  updateTask
};
