import React, { Fragment } from 'react';

export default function standard(WrappedComponent) {
  function Standard(props) {
    return (
      <Fragment>
        <h1>Header</h1>
        <WrappedComponent {...props} />
      </Fragment>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Standard.displayName = `standard(${wrappedComponentName})`;
  return Standard;
}
