import React, {PureComponent} from 'react';
import axios from 'axios';

import ErrorPage from 'components/ErrorPage';

const errorHandler = (WrappedComponent) => {
  return class EH extends PureComponent {
    state = {
      error: null
    };

    componentDidMount() {
      // Set axios interceptors
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          // alert('Error happened');
          console.log('errrrrrrrrr', error.request)
          this.interpretor(error);
        }
      );
    }

    interpretor(err) {
      console.log('in interpretor');
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
          this.setState({ error: 500 });
      } else {
          // Something happened in setting up the request and triggered an Error
          console.log("err other");
          console.log('Error', err.message);
      }
      console.log(err.config);
    }

    componentWillUnmount() {
      // Remove handlers, so Garbage Collector will get rid of if WrappedComponent will be removed 
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      let renderSection = <WrappedComponent {...this.props} />
      
      if (this.state.error === 500) { 
        renderSection = <ErrorPage code="500" text="An error happened on our side. Please try again later."/>;
      };

      return renderSection;
    }
  };
};

export default errorHandler;
