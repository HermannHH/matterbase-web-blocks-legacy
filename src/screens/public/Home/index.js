import React from 'react';
import PropTypes from 'prop-types';

import standard from 'screens/public/layouts/standard';

import AboveTheFold from 'screens/public/Home/AboveTheFold';
import TheWhy from 'screens/public/Home/TheWhy';
import FinalCallToAction from 'screens/public/Home/FinalCallToAction';
import UseCases from 'screens/public/Home/UseCases';
import Pricing from 'screens/public/Home/Pricing';

function Home(props) {
  return (
    <div>
      <AboveTheFold />
      <TheWhy />
      <UseCases />
      <Pricing />
      <FinalCallToAction />
    </div>
  );
}

Home.propTypes = {};

export default standard(Home);
