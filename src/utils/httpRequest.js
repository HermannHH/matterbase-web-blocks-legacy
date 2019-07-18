import axios from 'axios';
import { getCookie } from './cookiesHelper';
import _ from 'lodash';

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

    if (err.response) {
        /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
        console.log("err.response");
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err.request) {
        /*
        * The request was made but no response was received, `err.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
        console.log("err.request");
        console.log(err.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log("err other");
        console.log('Error', err.message);
    }
    console.log(err.config);
  }

}

export default httpRequest;
