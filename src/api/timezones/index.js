import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function timezonesList() {
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/timezones`,
    method: 'get'
  });
};

export {
  timezonesList
}
