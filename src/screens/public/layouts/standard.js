import React from 'react';

import Navbar from 'screens/public/components/Navbar';
import Footer from 'screens/public/components/Footer';

export default function standard(WrappedComponent) {
  function Standard(props) {
    return (
      <div>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Standard.displayName = `standard(${wrappedComponentName})`;
  return Standard;
}
