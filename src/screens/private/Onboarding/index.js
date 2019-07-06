import React from 'react'

import OnboardingForm from './OnboardingForm';

function Onboarding() {
  return (
    <div id="onboarding">
        <div id="onboarding-left">
          <OnboardingForm />
        </div>
        <div id="onboarding-right">
          <OnboardingForm />
        </div>
    </div>
  )
};

export default Onboarding;
