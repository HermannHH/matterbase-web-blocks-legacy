import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

function PageNotFound(props) {
  return (
    <div>
      <h1>PageNotFound</h1>
      <div className="my-4">
        <a className="btn btn-primary btn-block btn-ghost-selago" href={routes.public.home.path}>Back to Safety</a>
      </div>
    </div>
  );
}

PageNotFound.propTypes = {};

export default PageNotFound;
