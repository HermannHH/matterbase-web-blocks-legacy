import constants from 'utils/constants';

export default {
  public: {
    home: { path: '/' },
    aboutUs: { path: '/about-us' },
    pricing: { path: '/pricing' },
    login: { path: '/auth/login' },
    register: { path: '/auth/register' },
    forgotPassword: { path: '/auth/forgot-password' },
    noConfirmationInstructions: { path: '/auth/no-confirmation-instructions' },
    noUnlockInstructions: { path: '/auth/no-unlock-instructions' },
    resetPassword: { path: '/auth/reset-password' }
  },
  protected: {},
  private: {}
};
