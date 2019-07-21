import React from 'react';

import { navigate } from '@reach/router';

import routes from 'routes';

import UseCase from 'components/UseCase';

export default function UseCaseList() {
  return (
    <div>
      <div className="my-5 p-5 selago-background rad-5">
        <UseCase
          heading="Use Cases"
          text={<h4>We built Matterbase from the ground up with one thing in mind: Adaptability. <br/> Our users are very creative and have been using the platform in ingenious ways. One of these ways is to <strong className="dodger-blue-text">DYNAMIC VALUE:</strong></h4>}
          url="http://localhost:3000"
          buttonText="See more use cases"
          handleButtonClick={() => navigate(routes.public.useCases.path)}
        />
      </div>
      <div className="my-5 p-5 snow-grey-background rad-5">
        <UseCase
          heading="Use Cases"
          text={<h4>We built Matterbase from the ground up with one thing in mind: Adaptability. <br/> Our users are very creative and have been using the platform in ingenious ways. One of these ways is to <strong className="dodger-blue-text">DYNAMIC VALUE:</strong></h4>}
          url="http://localhost:3000"
          buttonText="See more use cases"
          handleButtonClick={() => navigate(routes.public.useCases.path)}
        />
      </div>
    </div>
  )
}
