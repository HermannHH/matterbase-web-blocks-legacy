import gql from 'graphql-tag';


const CREATE_STICKY_NOTE = gql`
mutation stickyNoteCreate($blockToken: String!, $body: String!) {
  stickyNoteCreate(input: {
    blockToken: $blockToken
    body: $body
  }) {
    stickyNote {
      body
      token
    }
    errors
  }
}
`;

const DESTROY_STICKY_NOTE = gql`
mutation taskDelete($token: String!) {
  taskDelete(input: {
    token: $token
  }) {
    stickyNote {
      token
    }
    errors
  }
}
`;

const UPDATE_STICKY_NOTE = gql`
mutation stickyNoteUpdate($token: String!, $body: String!) {
  stickyNoteUpdate(input: {
    token: $token
    body: $body
    isCompleted: $isCompleted
  }) {
    stickyNote {
      body
      token
    }
    errors
  }
}
`;


export {
  CREATE_STICKY_NOTE,
  DESTROY_STICKY_NOTE,
  UPDATE_STICKY_NOTE
};
