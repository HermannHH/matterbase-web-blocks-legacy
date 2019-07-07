import React, { useState } from 'react';

import { sendConfirmationEmail } from 'api/users';

import Navbar from 'screens/private/components/Navbar';

import FooterBanner from 'components/FooterBanner';

export default function standard(WrappedComponent) {
  function Standard(props) {
    console.log('standard props', props)
    const [verificationSent, setVerificationSent] = useState(false);

    async function handleSendConfirmationEmail() {
      await sendConfirmationEmail();
      setVerificationSent(true);
    };

    return (
      <div className="min-full-height snow-grey-background">
        <Navbar handleSignOut={props.appContext.actions.handleSignOut}/>
        <WrappedComponent {...props} />
        {!props.appContext.data.user.isEmailVerified &&
          <FooterBanner text={ verificationSent ? "We have sent you an email containing verification instructions" : "Your account is not verified yet. Click on the button on the right to resend the confirmation instuctions"} handleSendConfirmationEmail={handleSendConfirmationEmail} verificationSent={verificationSent}/>
        }
      </div>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Standard.displayName = `standard(${wrappedComponentName})`;
  return Standard;
}
