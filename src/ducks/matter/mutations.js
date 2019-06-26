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


// Blocks
const blockCreate = gql`
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


const blockDelete = gql`
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
  matterCreate,
  matterDelete,
  matterUpdate,
  // 
  blockCreate,
  blockDelete
}
