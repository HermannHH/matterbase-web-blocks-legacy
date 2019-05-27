import React, {Fragment} from 'react';
import { Router } from '@reach/router';

const Home = () => <div>Protected Home</div>;
const Dash = () => <div>Protected Dash</div>;

function Protected() {
  return (
    <Fragment>
      {/* <Home path="/" />
      <Dash path="dashboard" /> */}
    </Fragment>
  );
}

export default Protected;
