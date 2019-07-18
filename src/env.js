export default {
  LOCAL: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'http://localhost:5000/api/v1',
    ASSET_BASE_PATH: 'http://d3c6yuhwj0xuxl.cloudfront.net',
    GOOGLE_TAG_MANAGER_ACTIVE: false
  },
  STAGING: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'https://staging-api.matterbase.io/api/v1',
    ASSET_BASE_PATH: 'http://d3c6yuhwj0xuxl.cloudfront.net',
    GOOGLE_TAG_MANAGER_ACTIVE: false
  },
  PRODUCTION: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'https://api.matterbase.io/api/v1',
    ASSET_BASE_PATH: 'http://d3c6yuhwj0xuxl.cloudfront.net',
    GOOGLE_TAG_MANAGER_ACTIVE: true
  }
};
