import React from 'react';
import PropTypes from 'prop-types';

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";

function Timeline(props) {
  return (
    <div className="container">
      <div className="my-5">
        <MatterList />
      </div>
    </div>
  );
}

Timeline.propTypes = {};

export default standard(Timeline);
