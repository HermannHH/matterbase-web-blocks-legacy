import React from 'react';

export default function FinalCallToAction() {
  return (
    <section className="container snow-grey-background my-5">
      <div className="row py-5">
        <div className="col-sm-12 text-center">
          <div className="my-5">
            <h1 className="display-4 font-weight-bold black-text">
              "Try Matterbase today. It is free"
            </h1>
          </div>
          <div className="my-5">
            link_to "TRY IT FOR FREE", new_user_registration_path, className:
            "btn btn-primary btn-lg gtm-button", id: "final-cta-sign-up-button"
          </div>
        </div>
      </div>
    </section>
  );
}
