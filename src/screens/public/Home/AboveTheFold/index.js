import React from 'react';
import styled from 'styled-components';
import constants from 'utils/constants';

import { navigate } from '@reach/router';

import routes from 'routes';

const AtlWrapper = styled.div`
  margin: 120px 0;

  #atl-text-container {
    margin-bottom: 120px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 0;
    }
  }

  #main-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 80%;
      @include media-breakpoint-up(lg) {
        width: 85%;
      }

      height: auto;
      margin: 0 auto;
    }
  }
`;

export default function AboveTheFold() {
  return (
    <div id="brochure">
      <section className="container">
        <AtlWrapper className="row">
          <div className="col-sm-10 col-lg-6">
            <div id="atl-text-container">
              <h1 className="display-4 font-weight-bold black-text">
                Productivity building blocks for individuals & teams
              </h1>
              <h4 className="tundora-text" style={{ lineHeight: '2rem' }}>
                Everyone finds productivity in their own unique workflows. Matterbase offers adaptable, time-based building blocks to be productive in your way.
              </h4>
              <div className="mt-5">
                <a
                  className="btn btn-primary btn-lg white-text"
                  onClick={() => navigate(routes.public.register.path)}
                  style={{ color: "white", cursor: "pointer"}}

                >
                  TRY IT FOR FREE
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-lg-6">
            <div id="main-image-container">
              <img src={`${constants.ENV.ASSET_BASE_PATH}/assets/block-builder.png`} />
            </div>
          </div>
        </AtlWrapper>
      </section>
    </div>
  );
}
