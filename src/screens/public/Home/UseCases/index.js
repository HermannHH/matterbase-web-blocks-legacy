import React from 'react';
import { withTheme } from 'styled-components';

function UseCases({ theme }) {
  return (
    <div>
      <section
        className="container rad-5 p-5 my-5"
        style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
      >
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
              <h1>Use Cases</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
            <h4 className="tundora-text" style={{ lineHeight: '2.3rem' }}>
              We built Matterbase from the ground up with one thing in mind: Adaptability. Our users are very creative and have been using the platform in ingenious ways. One of these ways is to DYNAMIC VALUE:
            </h4>
          </div>
        </div>
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(UseCases);
