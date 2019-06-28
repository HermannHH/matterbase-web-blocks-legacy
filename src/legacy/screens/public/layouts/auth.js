import React from 'react';

import AuthNavbar from 'screens/public/components/AuthNavbar';

export default function auth(WrappedComponent) {
  function Auth(props) {
    return (
      <div className="selago-background">
        <AuthNavbar />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center min-full-height">
          <div className="col-10 col-md-6 col-lg-4">
          <WrappedComponent {...props} />
          </div>
        </div>
      </div>
      </div>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

    Auth.displayName = `auth(${wrappedComponentName})`;
  return Auth;
}
