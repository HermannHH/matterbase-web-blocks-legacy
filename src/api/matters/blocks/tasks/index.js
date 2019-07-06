import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function createTask({
  matterToken,
  blockToken,
  body
}) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks`, {
      task: {
        body
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function destroyTask({
  matterToken,
  blockToken,
  token
}) {
  try {
    const response = await axios.delete(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks/${token}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function updateTask({
  matterToken,
  blockToken,
  token,
  body,
  isCompleted
}) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/tasks/${token}`, {
      task: {
        body,
        is_completed: isCompleted
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  createTask,
  destroyTask,
  updateTask
};
