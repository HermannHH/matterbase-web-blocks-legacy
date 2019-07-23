import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoResults({ title }) {

  return (
    <div className="row">
      <div className="col-12">
        <div className="blank-matters-placeholder">
        <h4>Nothing important scheduled for today</h4>
        </div>
      </div>
      
    </div>
  );
}

NoResults.propTypes = {};

export default NoResults;
