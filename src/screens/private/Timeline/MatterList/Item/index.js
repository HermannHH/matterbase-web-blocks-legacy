import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';

function Item({ token, title, removeMatter, setEditToken}) {

  return (
    <div className="col-12 my-4 d-flex align-items-stretch">
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <Dropdown alignRight >
            <Dropdown.Toggle variant="light">
              <FontAwesomeIcon icon={faEllipsisH} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setEditToken(token)}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item onClick={() => removeMatter({ token })}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="card-actions">
          <a className="btn btn-light dodger-blue-text" href={replaceUrlParams(':matterId', routes.private.blocks.path, token)}>See More <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {};

export default Item;
