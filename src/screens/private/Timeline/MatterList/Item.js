import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';

function Item({ token, title, removeMatter}) {

  return (
    <div className="col-12 my-4 d-flex align-items-stretch">
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
        </div>
        <div className="card-actions">
          <a className="btn btn-light dodger-blue-text" onClick={() => removeMatter({ token })}>Remove</a>
          <a className="btn btn-light dodger-blue-text" href={replaceUrlParams(':matterId', routes.private.blocks.path, token)}>See More <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {};

export default Item;
