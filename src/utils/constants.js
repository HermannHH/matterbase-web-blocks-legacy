import envInit from 'env';

const ENV = envInit[process.env.REACT_APP_ENV || 'LOCAL'];

export default {
  ENV
};
