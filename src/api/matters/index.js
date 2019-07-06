import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function mattersList() {
  try {
    const response = await axios.get(`${ENV.API_V1_ROOT_PATH}/matters`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function createMatter({
  title
}) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/matters`, {
      matter: {
        title
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function destroyMatter({
  token
}) {
  try {
    const response = await axios.delete(`${ENV.API_V1_ROOT_PATH}/matters/${token}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function updateMatter({
  token,
  title
}) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/matters/${token}`, {
      matter: {
        title
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  mattersList,
  createMatter,
  destroyMatter,
  updateMatter
};
