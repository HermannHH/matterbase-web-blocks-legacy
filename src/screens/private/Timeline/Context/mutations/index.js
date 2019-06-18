
import React from 'react';
// import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const matterCreate = gql`
mutation matterCreate($title: String!) {
  matterCreate(input: {
    title: $title
  }) {
    matter {
      title
      token
    }
    errors
  }
}
`;

const matterDelete = gql`
mutation matterDelete($token: String!) {
  matterDelete(input: {
    token: $token
  }) {
    matter {
      title
      token
    }
    errors
  }
}
`;

const matterUpdate = gql`
mutation matterUpdate($token: String!, $title: String) {
  matterUpdate(input: {
    token: $token
    title: $title
  }) {
    matter {
      title
      token
    }
    errors
  }
}
`;


export {
  matterCreate,
  matterDelete,
  matterUpdate
}
