import React from 'react';
import { Match } from "@reach/router";

import { navigate } from '@reach/router';

import routes from 'routes';



function AuthActionButtons() {
  return (
  <div>
    <Match path={routes.public.login.path}>
    {props => !props.match && (
      <div className="my-4">
        <a className="btn btn-primary btn-block btn-ghost-selago" onClick={() => navigate(routes.public.login.path)} style={{ cursor: "pointer"}}>Login</a>
      </div>
    )}
    </Match>
    <Match path={routes.public.register.path}>
    {props => !props.match && (
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" onClick={() => navigate(routes.public.register.path)} style={{ cursor: "pointer"}}>Register</a>
    </div>
    )}
    </Match>
    <Match path={routes.public.forgotPassword.path}>
    {props => !props.match && (
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" onClick={() => navigate(routes.public.forgotPassword.path)} style={{ cursor: "pointer"}}>Forgot your password?</a>
    </div>
    )}
    </Match>
    <Match path={routes.public.noConfirmationInstructions.path}>
    {props => !props.match && (
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" onClick={() => navigate(routes.public.noConfirmationInstructions.path)} style={{ cursor: "pointer"}}>Didn't receive confirmation instructions?</a>
    </div>
    )}
    </Match>
    <Match path={routes.public.noUnlockInstructions.path}>
    {props => !props.match && (
    <div className="my-4">
      <a className="btn btn-primary btn-block btn-ghost-selago" onClick={() => navigate(routes.public.noUnlockInstructions.path)} style={{ cursor: "pointer"}}>Didn't receive unlock instructions?</a>
    </div>
    )}
    </Match>
  </div>

  );
}

export default AuthActionButtons;
