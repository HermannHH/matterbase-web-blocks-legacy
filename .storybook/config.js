import { configure } from '@storybook/react';
// import 'bootstrap/dist/css/bootstrap.css';

function loadStories() {
  // require('../stories/index.js');
  const req = require.context('../src/components', true, /stories\.js$/);
  // console.log('req', req)
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
