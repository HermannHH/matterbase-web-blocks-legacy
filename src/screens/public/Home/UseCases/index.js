import React from 'react';
import { withTheme } from 'styled-components';

import { navigate } from '@reach/router';

import routes from 'routes';

import UseCase from 'components/UseCase';

function UseCases({ theme }) {
  return (
    <div>
      <section
        className="container rad-5 p-5 my-5"
        style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
      >
        <UseCase
          heading="Use Cases"
          text={<h4>We built Matterbase from the ground up with adaptability in mind. <br/> Our users are very creative and have been using the platform in ingenious ways. One of these ways is to <strong className="dodger-blue-text">DYNAMIC VALUE:</strong></h4>}
          url="http://localhost:3000"
          buttonText="See more use cases"
          handleButtonClick={() => navigate(routes.public.useCases.path)}
        />
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(UseCases);
