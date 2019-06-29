import gql from 'graphql-tag';

const CREATE_BLOCK = gql`
mutation blockCreate($matterToken: String!, $scopeType: String!) {
  blockCreate(input: {
    matterToken: $matterToken
    scopeType: $scopeType
  }) {
    block {
      token
      scopeType
    }
    errors
  }
}
`;


const DESTROY_BLOCK = gql`
mutation blockDelete($token: String!) {
  blockDelete(input: {
    token: $token
  }) {
    block {
      token
    }
    errors
  }
}
`;


export {
  CREATE_BLOCK,
  DESTROY_BLOCK
};
