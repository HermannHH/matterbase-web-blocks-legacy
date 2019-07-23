import React from 'react';
import { Button } from'react-bootstrap';

export default function FooterBanner({ text, handleSendConfirmationEmail, verificationSent }) {
  return (
    <div id="footer-banner">
      <h4>{text}</h4>
      {!verificationSent &&
        <Button variant="warning" size="lg" onClick={() => handleSendConfirmationEmail()}>Resend confirmation email</Button>
      }
    </div>
  )
}
