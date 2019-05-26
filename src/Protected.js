import React from 'react';
import { Router } from '@reach/router';

const Home = () => <div>Protected Home</div>;
const Dash = () => <div>Protected Dash</div>;

function Protected() {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
}

export default Protected;
