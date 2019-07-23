import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";


function Timeline() {

  return (
    <div className="container">
        <div className="my-5">
          <h1>Hello</h1>
        </div>
    </div>
  );
}

Timeline.propTypes = {};

export default standard(Timeline);
