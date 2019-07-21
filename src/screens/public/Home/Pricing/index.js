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
            <h4 className="black-text" style={{ lineHeight: '2.3rem' }}>
              We will always have a free tier
            </h4>
            <h4 className="black-text" style={{ lineHeight: '2.3rem' }}>
              There is great value in trying a platform before committing to it. For this reason, we will always have a free tier. There is no need to provide any credit card details before knowing that Matterbase works for you. More features & pricing plans coming soon.
            </h4>
          </div>
        </div>
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(Pricing);
