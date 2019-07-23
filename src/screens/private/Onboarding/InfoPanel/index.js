import React from 'react';
import constants from 'utils/constants';

export default function InfoPanel() {
  return (
    <div id="info-panel">
      <div id="info-panel-image">
        <img src={`${constants.ENV.ASSET_BASE_PATH}/assets/checked-boxes-2.png`} />
      </div>
      <div  id="info-panel-text">
        <h1>Let's get productive</h1>
      </div>
    </div>
  )
}
