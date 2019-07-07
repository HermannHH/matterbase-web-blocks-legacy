import React, { useEffect } from 'react';

import { confirmEmail } from 'api/users';


export default function ConfirmEmail({ confirmationToken }) {


  async function handleConfirmEmail({ confirmationToken }) {
    const data = await confirmEmail({  confirmationToken  });
    console.log('sign in data', data)
  };

  useEffect(() => {
    handleConfirmEmail({ confirmationToken });
  }, []);

  return (
    <div id="confirm-email">
      <h4>Confirming Account...</h4>
    </div>
  )
}
