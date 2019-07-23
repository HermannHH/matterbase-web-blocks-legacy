import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";

import { timezonesList } from 'api/timezones';
import { updateCurrentProfile } from 'api/users/profiles';

import routes from 'routes';

import OnboardingForm from './OnboardingForm';
import InfoPanel from './InfoPanel';

import Loading from 'components/Loading';
import NavbarBrand from 'components/NavbarBrand';

function Onboarding({ appContext: { actions }}) {

  const [loading, setLoading] = useState(true);
  const [timezoneOptionsArray, setTimezoneOptionsArray] = useState([]);

  async function fetchTimezonesList() {
    const data = await timezonesList();
    setTimezoneOptionsArray(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTimezonesList();
  }, []);

  async function handleUpdateCurrentProfile({ firstName, lastName, timezone }) {
    const data = await updateCurrentProfile({ firstName, lastName, timezone });
    actions.setLoading(true);
    await actions.handleGetCurrentUser({ nextPath: routes.private.home.path});
    setTimeout(() => {
      actions.setLoading(false);
    }, 1000);
  };

  return (
    <div id="onboarding">
        <Helmet>
            <title>Matterbase | Onboarding</title>
        </Helmet>
        <div id="onboarding-left">
          <div id="nav-logo">
            <NavbarBrand />
          </div>
          {loading ?
            <Loading />
            :
            <OnboardingForm timezoneOptionsArray={timezoneOptionsArray} handleUpdateCurrentProfile={handleUpdateCurrentProfile}/>
          }
        </div>
        <div id="onboarding-right">
          <InfoPanel />
        </div>
    </div>
  )
};

export default Onboarding;
