import React from 'react';

import Navbar from 'screens/private/components/Navbar';

export default function standard(WrappedComponent) {
  function Standard(props) {
    console.log('standard props', props)
    return (
      <div className="min-full-height snow-grey-background">
        <Navbar handleSignOut={props.appContext.actions.handleSignOut}/>
        <WrappedComponent {...props} />
      </div>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Standard.displayName = `standard(${wrappedComponentName})`;
  return Standard;
}
