import React from 'react';
import { withTheme } from 'styled-components';

function TheWhy({ theme }) {
  return (
    <div>
      <section
        className="container rad-5 p-5 my-5 selago-background"
        style={{ backgroundColor: theme.colors.selago, borderRadius: '5px' }}
      >
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
              <h1 className="dodger-blue-text font-weight-bold">Why Matterbase?</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center px-5">
            <h4 className="tundora-text" style={{ lineHeight: '2.3rem' }}>
              Calendars, planners & scheduling tools often operate in silos and can be hard to use. Matterbase transforms your day to day workflows to be more integrated & connected.
            </h4>
          </div>
        </div>
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(TheWhy);
