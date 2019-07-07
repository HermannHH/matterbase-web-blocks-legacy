import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function signUp({ email, password, passwordConfirmation }) {
  try {
    const response = await axios.post(`${ENV.API_V1_ROOT_PATH}/users`, {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function confirmEmail({ confirmationToken }) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/users/confirm`, {
      user: {
        confirmation_token: confirmationToken
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};


export {
  signUp,
  confirmEmail
};
