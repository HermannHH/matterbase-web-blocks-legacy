import React from 'react';
import { Button } from 'react-bootstrap';

export default function ErrorPage({ code, text }) {
  function mailer() {
    const mailToUrl = `mailto:hermann@matterbase.io?subject=Error%20Report&body=${encodeURIComponent(text)}`;
    // window.location.href = ;
    console.log('mailerUrl', mailToUrl);
  }
  return (
    <div className="error-page">
      <h1>{code}</h1>
      <h4>{text}</h4>
      <strong>OR</strong>
      <Button onClick={() => mailer()}>Contact Support</Button>
    </div>
  )
};
