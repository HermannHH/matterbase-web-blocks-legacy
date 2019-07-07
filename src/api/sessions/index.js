import httpRequest from 'utils/httpRequest';
import { setCookie, deleteCookie } from "utils/cookiesHelper";
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function signIn({ email, password }) {
  const data = {
    user: {
      email,
      password
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/sessions`,
    method: 'post',
    data,
    onSuccess: (resp) => setCookie("authToken", resp.data.auth_token)
  });
};

async function signOut() {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/sessions/destroy`,
    method: 'delete',
    onSuccess: (resp) => deleteCookie("authToken")
  });
};


export {
  signIn,
  signOut
};
