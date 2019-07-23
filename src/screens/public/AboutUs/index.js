import React from 'react';
// import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import standard from 'screens/public/layouts/standard';

function AboutUs(props) {
  return (
    <div className="container">
      <Helmet>
          <title>Matterbase | About Us</title>
      </Helmet>
      <div className="row my-5">
        <div className="col-12 my-5">
          <div className="my-5  d-flex flex-column align-items-center justify-content-center ">
            <h1>What's in a name?</h1>
            <p>
            A name defines who you are. In naming our platform, we wanted to portray what we stand for, in a memorable way.
            </p>
            <p>
            The scientific definition of matter, is that everything has mass and takes up space. What your see around you, consists of matter. Your daily life is a combination of blocks of time consumed by various activities and tasks.
            </p>
            <p>
            Matter occupies space. Time is at the very core of our productivity universe. Matterbase places Time at the centre of all your productivity efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {};

export default standard(AboutUs);
