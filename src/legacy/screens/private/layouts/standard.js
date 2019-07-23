import React from 'react';

import Navbar from 'screens/private/components/Navbar';

export default function standard(WrappedComponent) {
  function Standard(props) {
    return (
      <div className="min-full-height snow-grey-background">
        <Navbar />
        <WrappedComponent {...props} />
      </div>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Standard.displayName = `standard(${wrappedComponentName})`;
  return Standard;
}
