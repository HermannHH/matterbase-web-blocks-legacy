import React from 'react';
import { Match } from "@reach/router";
import routes from 'routes';


function AuthActionButtons() {
  return (
  <div>
    <Match path={routes.public.login.path}>
    {props => !props.match && (
      <div className="my-4">
        <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.login.path}>Login</a>
      </div>
    )}
    </Match>
    <Match path={routes.public.register.path}>
    {props => !props.match && (
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.register.path}>Register</a>
    </div>
    )}
    </Match>
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.forgotPassword.path}>Forgot your password?</a>
    </div>
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.noConfirmationInstructions.path}>Didn't receive confirmation instructions?</a>
    </div>
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.noUnlockInstructions.path}>Didn't receive unlock instructions?</a>
    </div>
  </div>

  );
}

export default AuthActionButtons;
