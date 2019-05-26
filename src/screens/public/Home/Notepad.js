import React from 'react';

export default function Notepad() {
  return (
    <section className="container feature-set selago-background rad-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">
            "Notepad for your ideas"
          </h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            "Easily record your ideas. Save to the cloud and share with anyone
            at any time."
          </h4>
          <div className="mt-5">
            link_to "I WANT A NOTEPAD WITH CONTEXT", new_user_registration_path,
            className: "btn btn-primary btn-lg gtm-button", id:
            "notepad-context-sign-up-button"
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            image_tag "document.png", className: "has-shadow"
          </div>
        </div>
      </div>
    </section>
  );
}
