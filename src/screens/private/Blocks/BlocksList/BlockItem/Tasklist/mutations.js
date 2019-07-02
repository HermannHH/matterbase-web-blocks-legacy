import gql from 'graphql-tag';

const CREATE_TASK = gql`
mutation taskCreate($blockToken: String!, $body: String!) {
  taskCreate(input: {
    blockToken: $blockToken
    body: $body
  }) {
    task {
      body
      token
      isCompleted
    }
    errors
  }
}
`;

const DESTROY_TASK = gql`
mutation taskDelete($token: String!) {
  taskDelete(input: {
    token: $token
  }) {
    task {
      token
    }
    errors
  }
}
`;

const UPDATE_TASK = gql`
mutation taskUpdate($token: String!, $body: String!, $isCompleted: Boolean!) {
  taskUpdate(input: {
    token: $token
    body: $body
    isCompleted: $isCompleted
  }) {
    task {
      body
      token
      isCompleted
    }
    errors
  }
}
`;


export {
  CREATE_TASK,
  DESTROY_TASK,
  UPDATE_TASK
};
