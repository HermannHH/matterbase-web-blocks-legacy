import React from 'react';
import { Router } from '@reach/router';

const Home = () => <div>Private Home</div>;
const Dash = () => <div>Private Dash</div>;

function Private() {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
}

export default Private;
