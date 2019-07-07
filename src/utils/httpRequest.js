import axios from 'axios';
import { getCookie } from './cookiesHelper';

async function httpRequest({
  url,
  method,
  data,
  config,
  onSuccess,
  onFailure
}) {
  const authToken = getCookie('authToken');
  const params = {
    url,
    method,
    data,
    headers: {
      'AUTHORIZATION': authToken,
    },
    config
  }
  try {
      const resp = await axios(params);

      console.log("httpRequest response", resp);
      if (onSuccess) {
        await onSuccess(resp)
      }
      return resp.data;

  } catch(err) {
    console.log("httpRequest error", err.response);
    // message.error(err.response.data.message || 'Something went wrong on our side');
    if (onFailure) {
      await onFailure(err)
    }
    // if(err.response.data.message === "Signature has expired") {
    //   destroySession({ authToken })
    // }
    throw new Error(err);
  }

}

export default httpRequest;
