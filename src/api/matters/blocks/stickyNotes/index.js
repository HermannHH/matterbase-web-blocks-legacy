import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function createStickyNote({
  matterToken,
  blockToken,
  body
}) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes`, {
      sticky_note: {
        body
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function destroyStickyNote({
  matterToken,
  blockToken,
  token
}) {
  try {
    const response = await axios.delete(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes/${token}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function updateStickyNote({
  matterToken,
  blockToken,
  token,
  body
}) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/matters/${matterToken}/blocks/${blockToken}/sticky_notes/${token}`, {
      sticky_note: {
        body
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  createStickyNote,
  destroyStickyNote,
  updateStickyNote
};
