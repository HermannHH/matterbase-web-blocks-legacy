import React from 'react';
import PropTypes from 'prop-types';

import standard from 'screens/public/layouts/standard';

import AboveTheFold from 'screens/public/Home/AboveTheFold';
import TheWhy from 'screens/public/Home/TheWhy';
import TimeAtCore from 'screens/public/Home/TimeAtCore';
import EverythingYouNeed from 'screens/public/Home/EverythingYouNeed';
import Notepad from 'screens/public/Home/Notepad';
import FinalCallToAction from 'screens/public/Home/FinalCallToAction';

function Home(props) {
  return (
    <div>
      <AboveTheFold />
      <TheWhy />
      <TimeAtCore />
      <EverythingYouNeed />
      <Notepad />
      <FinalCallToAction />
    </div>
  );
}

Home.propTypes = {};

export default standard(Home);
