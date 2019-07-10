import axios from 'axios';
import { getCookie } from './cookiesHelper';

class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionError';
    this.message = message;
  };

  toJSON() {
    return {
      name: this.name,
      status: 422,
      message: this.message,
      stacktrace: this.stack
    }
  }
}

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
    throw new PermissionError("Permission Denied");
  }

}

export default httpRequest;
