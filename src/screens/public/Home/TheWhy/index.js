import React from 'react';
import { withTheme } from 'styled-components';

function TheWhy({ theme }) {
  return (
    <div className="my-5 py-5">
      <section
        className="container rad-5 p-5 my-5"
        style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
            <h4 className="black-text" style={{ lineHeight: '2.3rem' }}>
              "I have always found calendars to be too structured and
              disconnected for my own liking. What I needed was a place where I
              could jot down ideas, notes and tasks that are event related,
              without having to switch between apps. This is why I decided to
              build Matterbase"
            </h4>
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

export default withTheme(TheWhy);
