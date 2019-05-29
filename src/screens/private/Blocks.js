import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from "routes";

import standard from "screens/private/layouts/standard";

function Blocks({ token }) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-8">
        <div className="row">
          <div className="col-12 mt-5">
            <h3>Blocks for Matter</h3>
          </div>
        </div>
        <div className="row">

          <div className="col-12 col-md-4 col-lg-3 my-4 d-flex align-items-stretch">
            <a className="card block" href={replaceUrlParams(':matterId', routes.private.notepad.path, token)}>
              <div className="block--image">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div className="block--text">
                Notepad
              </div>
            </a>
          </div>


          <div className="col-12 col-md-4 col-lg-3 my-4 d-flex align-items-stretch">
            <a className="card block" href={replaceUrlParams(':matterId', routes.private.tasklist.path, token)}>
              <div className="block--image">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              <div className="block--text">
                Tasklist
              </div>
            </a>
          </div>


          <div className="col-12 col-md-4 col-lg-3 my-4 d-flex align-items-stretch">
            <div className="card block coming-soon">
              <div className="block--text">
                More blocks coming soon
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

Blocks.propTypes = {};

export default standard(Blocks);
