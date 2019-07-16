export default {
  LOCAL: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'http://localhost:5000/api/v1',
    ASSET_BASE_PATH: 'https://s3.amazonaws.com/matterbase',
    GOOGLE_TAG_MANAGER_ACTIVE: false
  },
  STAGING: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'https://api-dev.matterbase.io/api/v1',
    ASSET_BASE_PATH: 'https://s3.amazonaws.com/matterbase',
    GOOGLE_TAG_MANAGER_ACTIVE: false
  },
  PRODUCTION: {
    BASE_URL: 'http://localhost:3000',
    API_V1_ROOT_PATH: 'https://api.matterbase.io/api/v1',
    ASSET_BASE_PATH: 'https://s3.amazonaws.com/matterbase',
    GOOGLE_TAG_MANAGER_ACTIVE: true
  }
};
