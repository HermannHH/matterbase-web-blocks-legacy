import React from 'react';
import { withTheme } from 'styled-components';

function Pricing({ theme }) {
  return (
    <div>
      <section
        className="container rad-5 p-5 my-5"
        style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
      >
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
              <h1>Pricing</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
            <h5 className="black-text" style={{ lineHeight: '2.3rem' }}>
              "I have always found calendars to be too structured and
              disconnected for my own liking. What I needed was a place where I
              could jot down ideas, notes and tasks that are event related,
              without having to switch between apps. This is why I decided to
              build Matterbase"
            </h5>
            <h6 className="tundora-text" style={{ lineHeight: '2.5rem' }}>
              - Hermann (Maker)
            </h6>
          </div>
        </div>
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(Pricing);
