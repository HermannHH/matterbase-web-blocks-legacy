import React from 'react';
import { Router } from '@reach/router';

const Home = () => <div>Public Home</div>;
const Dash = () => <div>Public Dash</div>;

function Public() {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
}

export default Public;
