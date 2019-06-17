import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)} onClick={action('button-click')} >
    {text('Label', 'Hello Storybook')}
  </button>
));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button>Hello Button</Button>
//   ))
//   .add('with emoji', () => (
//     <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   ));   
