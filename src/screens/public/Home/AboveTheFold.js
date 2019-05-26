import React from 'react';

export default function AboveTheFold() {
  return (
    <div id="brochure">
      <section className="container">
        <div className="row" id="atl-wrapper">
          <div className="col-sm-10 col-lg-6">
            <div id="atl-text-container">
              <h1 className="display-4 font-weight-bold black-text">
                "Focused workflows for you and your team"
              </h1>
              <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
                "Everyone finds productivity in their own unique workflows.
                Matterbase provides the building blocks for you and your team to
                be productive in your own way."
              </h4>
              <div className="mt-5">
                link_to "TRY IT FOR FREE", new_user_registration_path,
                className: "btn btn-primary btn-lg", id: "atf-sign-up-button"
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-lg-6">
            <div id="main-image-container">image_tag "image.png"</div>
          </div>
        </div>
      </section>
    </div>
  );
}
