import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function forgotPassword({ email }) {
  const data = {
    password: {
      email
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/passwords/forgot`,
    method: 'patch',
    data
  });
};

async function resetPassword({ resetPasswordToken, password, passwordConfirmation }) {
  const data = {
    password: {
      reset_password_token: resetPasswordToken,
      password,
      password_confirmation: passwordConfirmation
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/passwords/reset`,
    method: 'patch',
    data
  });
};


export {
  forgotPassword,
  resetPassword
};
