import React from 'react';
import { withTheme } from 'styled-components';
import constants from 'utils/constants';
import Button from 'react-bootstrap/Button';
import routes from 'routes';

import FeatureSetWrapper from 'screens/public/Home/components/FeatureSetWrapper';

function Notepad({ theme }) {
  return (
    <FeatureSetWrapper
      className="container"
      style={{ backgroundColor: theme.colors.selago, borderRadius: '5px' }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">
            Notepad for your ideas
          </h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            Easily record your ideas. Save to the cloud and share with anyone at
            any time.
          </h4>
          <div className="mt-5">
            <Button>I WANT A NOTEPAD WITH CONTEXT</Button>
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            <img src={`${constants.ENV.ASSET_BASE_PATH}/document.png`} />
          </div>
        </div>
      </div>
    </FeatureSetWrapper>
  );
}

export default withTheme(Notepad);
