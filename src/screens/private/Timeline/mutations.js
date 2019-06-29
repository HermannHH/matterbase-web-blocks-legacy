import gql from 'graphql-tag';

const CREATE_MATTER = gql`
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

const UPDATE_MATTER = gql`
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

const DESTROY_MATTER = gql`
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


export {
  CREATE_MATTER,
  UPDATE_MATTER,
  DESTROY_MATTER
};
