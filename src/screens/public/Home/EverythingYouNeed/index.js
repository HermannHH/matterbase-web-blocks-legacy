import React from 'react';
import { withTheme } from 'styled-components';
import constants from 'utils/constants';
import routes from 'routes';

import Button from 'components/Button';
import FeatureSetWrapper from 'screens/public/Home/components/FeatureSetWrapper';

function EverythingYouNeed({ theme }) {
  return (
    <FeatureSetWrapper
      className="container"
      style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">
            Everything you need. Nothing you don't
          </h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            Only add workflow blocks you need, eliminating unnecessary
            distraction. This increases productivity.
          </h4>
          <div className="mt-5">
            <Button>I WANT MY OWN WORKFLOW</Button>
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            <img src={`${constants.ENV.ASSET_BASE_PATH}/blocks.png`} />
          </div>
        </div>
      </div>
    </FeatureSetWrapper>
  );
}

export default withTheme(EverythingYouNeed);
