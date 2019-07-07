import React from 'react';
import { withTheme } from 'styled-components';
import constants from 'utils/constants';
import Button from 'react-bootstrap/Button';

import { navigate } from '@reach/router';

import routes from 'routes';

// import Button from 'components/Button';
import FeatureSetWrapper from 'screens/public/Home/components/FeatureSetWrapper';

function TimeAtCore({ theme }) {
  return (
    <FeatureSetWrapper
      className="container"
      style={{ backgroundColor: theme.colors.selago, borderRadius: '5px' }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">Time at the core</h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            You have limited time, so use it well. Divide your time into blocks
            (aka. Matters). Ideas and tasks are more meaningful when associated
            with blocks of time.
          </h4>
          <div className="mt-5">
            <Button onClick={() => navigate(routes.public.register.path)}>I WANT TO BE MORE FOCUSED</Button>
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            <img src={`${constants.ENV.ASSET_BASE_PATH}/matters.png`} />
          </div>
        </div>
      </div>
    </FeatureSetWrapper>
  );
}

export default withTheme(TimeAtCore);
