import React, { useEffect, useState } from 'react';

import { timezonesList } from 'api/timezones';

import OnboardingForm from './OnboardingForm';

import Loading from 'components/Loading';

function Onboarding() {

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

  return (
    <div id="onboarding">
        <div id="onboarding-left">
          {loading ?
            <Loading />
            :
            <OnboardingForm timezoneOptionsArray={timezoneOptionsArray}/>
          }
        </div>
        <div id="onboarding-right">
          <OnboardingForm />
        </div>
    </div>
  )
};

export default Onboarding;
