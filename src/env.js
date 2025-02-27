export default {
  LOCAL: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'http://localhost:5000/api/v1',
    ASSET_BASE_PATH: 'https://d3c6yuhwj0xuxl.cloudfront.net'
  },
  STAGING: {
    BASE_URL: 'https://staging.matterbase.io',
    API_V1_ROOT_PATH: 'https://matterbase-api-staging.herokuapp.com/api/v1',
    ASSET_BASE_PATH: 'https://d3c6yuhwj0xuxl.cloudfront.net'
  },
  PRODUCTION: {
    BASE_URL: 'https://matterbase.io',
    API_V1_ROOT_PATH: 'https://api.matterbase.io/api/v1',
    ASSET_BASE_PATH: 'https://d3c6yuhwj0xuxl.cloudfront.net'
  }
};
