import React from 'react';
import { Router } from '@reach/router';

import Home from 'screens/public/Home';

function Public() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default Public;
