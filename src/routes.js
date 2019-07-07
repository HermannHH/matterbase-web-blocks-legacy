import constants from 'utils/constants';

export default {
  // home: { path: '/' },
  // Public
  public: {
    home: { path: '/' },
    aboutUs: { path: '/about-us' },
    pricing: { path: '/pricing' },
    login: { path: '/auth/login' },
    register: { path: '/auth/register' },
    forgotPassword: { path: '/auth/forgot-password' },
    resetPassword: { path: '/auth/reset-password/:resetPasswordToken' },
  },
  protected: {
    confirmEmail: { path: '/auth/confirm-email/:confirmationToken'}
  },
  private: {
    home: { path: '/' },
    onboarding: { path: '/onboarding' },
    blocks: { path: '/blocks/:matterId' },
  }
  
  // Protected
  // private
  // blocks: { path: '/blocks/:matterId' },
  // notepad: { path: '/notepad/:matterId' },
  // tasklist: { path: '/tasklist/:matterId' },
};

{/* <Timeline path="/" />
<ChangePassword path="/change_password" />
<Notepad path="/notepad" />
<TaskList path="/task_list" />
<Blocks path="/blocks/:matterId" /> */}
