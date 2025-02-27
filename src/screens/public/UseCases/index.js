import React from 'react';
// import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import standard from 'screens/public/layouts/standard';

import UseCaseBlocks from './UseCaseBlocks';
import UseCaseList from './UseCaseList';

function UseCases(props) {
  return (
    <div className="container">
      <Helmet>
          <title>Matterbase | Use Cases</title>
      </Helmet>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="my-5">
              <UseCaseBlocks />
          </div>
        </div>
        <div className="col-12 col-lg-10">
          <div className="my-5">
              <UseCaseList />
          </div>
        </div>
      </div>
    </div>
  );
}

UseCases.propTypes = {};

export default standard(UseCases);
