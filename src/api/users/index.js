import httpRequest from 'utils/httpRequest';
import { setCookie } from "utils/cookiesHelper";

import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function signUp({ email, password, passwordConfirmation }) {
  const data = {
    user: {
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/users`,
    method: 'post',
    data,
    onSuccess: (resp) => setCookie("authToken", resp.data.jwt_auth_token)
  });
};

async function confirmEmail({ confirmationToken }) {
  const data = {
    user: {
      confirmation_token: confirmationToken
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/users/confirm`,
    method: 'patch',
    data,
    // onSuccess: (resp) => setCookie("authToken", resp.data.auth_token)
  });
};


export {
  signUp,
  confirmEmail
};
