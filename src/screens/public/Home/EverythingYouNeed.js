import React from 'react';

export default function EverythingYouNeed() {
  return (
    <section className="container feature-set snow-grey-background rad-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">
            "Everything you need. Nothing you don't"
          </h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            "Only add workflow blocks you need, eliminating unnecessary
            distraction. This increases productivity."
          </h4>
          <div className="mt-5">
            link_to "I WANT MY OWN WORKFLOW", new_user_registration_path,
            className: "btn btn-primary btn-lg gtm-button", id:
            "build-workflow-sign-up-button"
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            image_tag "blocks.png", className: "has-shadow"
          </div>
        </div>
      </div>
    </section>
  );
}
