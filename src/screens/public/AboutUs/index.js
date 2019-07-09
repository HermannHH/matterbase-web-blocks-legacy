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
      <div className="row">
        <div className="col-12">
          <div className="my-5">
      
            <h1>Who built Matterbase</h1>
            <p>
            👋 Hi my name is Hermann. I'm an indie-maker and creator of Matterbase. You can get in touch with me on <a target='_blank' href='https://twitter.com/Hermann_Harris'>twitter</a> or via <a href='mailto:hermann@matterbase.io'>email</a>
            </p>
      
            <h1>Why the name?</h1>
            <p>
            A name defines who you are. In naming our platform Matterbase, we wanted to portray what we stand for, in a memorable way.
            </p>
            <p>
            The scientific definition of matter, is everything that has mass and takes up space. Everything around you is made up of matter.
            </p>
            <p>
            Your daily life is a combination of events, meetings, appointments to name but a few. Every single one of these consumes a part of your valuable time. It reminds us of the way matter occupies space.
            </p>
            <p>
            We built Matterbase from the ground up, with time at the very core of our productivity universe. It makes sense to place your most valuable, yet limited resource at the centre of all your productivity efforts, doesn't it?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {};

export default standard(AboutUs);
