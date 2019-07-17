import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { navigate } from '@reach/router';
import moment from 'moment-timezone';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from 'routes';
// dispatch(push(replaceUrlParams(':matterId', routes.blocks.path, token)))
function ListItem({
  token,
  data,
  handleDestroyItem,
  setEditToken,
  timezone
}) {

  moment.tz.setDefault(timezone);
  // console.log('data', token, data)
  return (
    <div className="col-12 col-md-6 p-4 d-flex align-items-stretch">
      <div className="card">
          <div className="card-head">
            <h3>{data.title}</h3>
            <Dropdown alignRight >
              <Dropdown.Toggle className="clear-dropdown">
                <FontAwesomeIcon icon={faEllipsisH} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setEditToken(token)}>
                  Edit
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleDestroyItem({ token })}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="card-row">
            <div className="card-row-container">
              <span className="badge badge-primary">
                {moment(data.start_at).format('DD MMM, YYYY hh:mm A')}
              </span>
              to 
              <span className="badge badge-primary">
                {moment(data.end_at).format('DD MMM, YYYY hh:mm A')}
              </span>
            </div>
          </div>
        <div className="card-actions">
          <a className="btn-link-dodger-blue" style={{ cursor: "pointer" }} onClick={() => navigate(replaceUrlParams(':matterId', routes.private.blocks.path, token))}>See More <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
      </div>
    </div>
  )
};

ListItem.propTypes = {

}

export default ListItem;
