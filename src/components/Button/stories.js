import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

const button = storiesOf('Button Stories', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
button.addDecorator(withKnobs);

button.add('default', () => (
  <Button disabled={boolean('Disabled', false)} onClick={action('button-click')} >
    {text('Label', 'Hello Storybook')}
  </Button>
));
