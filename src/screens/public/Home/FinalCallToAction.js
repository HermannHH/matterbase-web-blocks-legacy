import React from 'react';
import { withTheme } from 'styled-components';
import constants from 'utils/constants';

import Button from 'components/Button';

function FinalCallToAction({ theme }) {
  return (
    <section
      className="container my-5"
      style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
    >
      <div className="row py-5">
        <div className="col-sm-12 text-center">
          <div className="my-5">
            <h1 className="display-4 font-weight-bold black-text">
              Try Matterbase today. It is free
            </h1>
          </div>
          <div className="my-5">
            <Button>TRY IT FOR FREE</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withTheme(FinalCallToAction);
