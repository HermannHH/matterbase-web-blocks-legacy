import React from 'react';
import { withTheme } from 'styled-components';
import _ from 'lodash';
import { navigate } from '@reach/router';

import routes from 'routes';

import UseCase from 'components/UseCase';

import useCases from 'screens/public/useCases';

function UseCases({ theme }) {

  const uc = _.sample(useCases);
  
  return (
    <div>
      <section
        className="container rad-5 p-5 my-5"
        style={{ backgroundColor: theme.colors.snowGrey, borderRadius: '5px' }}
      >
        <UseCase
          heading="Use Cases"
          text={<h4>We built Matterbase from the ground up with adaptability in mind. <br/> Our users are very creative and have been using the platform in ingenious ways. One of these ways is as a <strong className="dodger-blue-text">{uc.name}</strong></h4>}
          url={`${uc.url}?embedded=true`}
          buttonText="See more use cases"
          handleButtonClick={() => navigate(routes.public.useCases.path)}
        />
      </section>
      <div className="my-5 py-5" />
    </div>
  );
}

export default withTheme(UseCases);
