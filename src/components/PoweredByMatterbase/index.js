import React from 'react';

import envInit from "env";

import { navigate } from '@reach/router';
import routes from 'routes';

const ENV = envInit[process.env.REACT_APP_ENV];

export default function PoweredByMatterbase() {
  return (
    <div className="powered-by-matterbase" onClick={() => window.open(routes.public.home.path,'_blank')}>
      <div className="powered-by-matterbase--icon" >
        <img src={`${ENV.ASSET_BASE_PATH}/branding/icon_60_60.png`} />
      </div>
      <div className="powered-by-matterbase--text">
          Powered by Matterbase
      </div>
    </div>
  )
}
