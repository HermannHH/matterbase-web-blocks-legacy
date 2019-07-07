import axios from 'axios';

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function forgotPassword({ email }) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/passwords/forgot`, {
      password: {
        email
      }
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

async function resetPassword({ resetPasswordToken, password, passwordConfirmation }) {
  try {
    const response = await axios.patch(`${ENV.API_V1_ROOT_PATH}/passwords/reset`, {
      password: {
        reset_password_token: resetPasswordToken,
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


export {
  forgotPassword,
  resetPassword
};
