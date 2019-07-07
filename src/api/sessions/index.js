import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function signIn({ email, password }) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/sessions`, {
      user: {
        email,
        password
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function signOut() {
  try {
    const response = await axios.delete(`${ENV.API_V1_ROOT_PATH}/sessions/destroy`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  signIn,
  signOut
};
