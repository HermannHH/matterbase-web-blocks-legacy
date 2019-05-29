import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Item({ title }) {

  return (
    <div className="col-12 my-4 d-flex align-items-stretch">
      <div className="card">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

Item.propTypes = {};

export default Item;
