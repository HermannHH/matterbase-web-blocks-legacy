import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function blocksList({ matterToken }) {
  try {
    const response = await axios.get(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function createBlock({
  matterToken,
  scopeType
}) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks`, {
      block: {
        matterToken,
        scope_type: scopeType
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function destroyBlock({
  matterToken,
  token
}) {
  try {
    const response = await axios.delete(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${token}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  blocksList,
  createBlock,
  destroyBlock
};
