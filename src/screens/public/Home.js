import React from 'react';
import PropTypes from 'prop-types';

import AboveTheFold from 'screens/public/Home/AboveTheFold';
import TheWhy from 'screens/public/Home/TheWhy';
import TimeAtCore from 'screens/public/Home/TimeAtCore';
import EverythingYouNeed from 'screens/public/Home/EverythingYouNeed';
import Notepad from 'screens/public/Home/Notepad';
import FinalCallToAction from 'screens/public/Home/FinalCallToAction';

import Navbar from 'screens/public/components/Navbar';
import Footer from 'screens/public/components/Footer';

function Home(props) {
  return (
    <div>
      <Navbar />
      <AboveTheFold />
      <TheWhy />
      <TimeAtCore />
      <EverythingYouNeed />
      <Notepad />
      <FinalCallToAction />
      <Footer />
    </div>
  );
}

Home.propTypes = {};

export default Home;
