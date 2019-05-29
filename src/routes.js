import constants from 'utils/constants';

export default {
  home: { path: '/' },
  public: {
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
  private: {
    blocks: { path: '/blocks/:matterId' },
    notepad: { path: '/notepad/:matterId' },
    tasklist: { path: '/tasklist/:matterId' },
  }
};

{/* <Timeline path="/" />
<ChangePassword path="/change_password" />
<Notepad path="/notepad" />
<TaskList path="/task_list" />
<Blocks path="/blocks/:matterId" /> */}
