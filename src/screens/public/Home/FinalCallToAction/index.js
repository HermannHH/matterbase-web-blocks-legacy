import React from 'react';
import { withTheme } from 'styled-components';

import { navigate } from '@reach/router';

import routes from 'routes';

import { Button } from 'react-bootstrap';

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
            <Button size="lg" onClick={() => navigate(routes.public.register.path)}>TRY IT FOR FREE</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withTheme(FinalCallToAction);
