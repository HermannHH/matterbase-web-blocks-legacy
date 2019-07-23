import httpRequest from 'utils/httpRequest';
import envInit from "env";

const ENV = envInit[process.env.REACT_APP_ENV];

async function updateCurrentProfile({
  firstName,
  lastName,
  timezone
}) {
  const data = {
    profile: {
      first_name: firstName,
      last_name: lastName,
      timezone,
    }
  };
  return await httpRequest({
    url: `${ENV.API_V1_ROOT_PATH}/users/profiles/update_current`,
    method: 'patch',
    data
  });
};


export {
  updateCurrentProfile
};
