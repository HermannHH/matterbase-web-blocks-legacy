import React from 'react';
// import PropTypes from 'prop-types';
import gql from 'graphql-tag';



const listMatters = gql`
  query listMatters {
    matters {
      title
      token
    }
  }
`;

export {
  listMatters
}
