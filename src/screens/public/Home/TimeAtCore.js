import React from 'react';

export default function TimeAtCore() {
  return (
    <section className="container feature-set selago-background rad-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-lg-6 screenshot-explainer d-flex justify-content-center flex-column">
          <h1 className="font-weight-bold black-text">"Time at the core"</h1>
          <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
            "You have limited time, so use it well. Divide your time into blocks
            (aka. Matters). Ideas and tasks are more meaningful when associated
            with blocks of time."
          </h4>
          <div className="mt-5">
            link_to "I WANT TO BE MORE FOCUSED", new_user_registration_path,
            className: "btn btn-primary btn-lg gtm-button", id:
            "manage-time-sign-up-button"
          </div>
        </div>
        <div className="col-sm-10 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="screenshot-wrapper">
            image_tag "matters.png", className: "has-shadow"
          </div>
        </div>
      </div>
    </section>
  );
}
