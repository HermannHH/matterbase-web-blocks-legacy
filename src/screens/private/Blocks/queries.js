import gql from 'graphql-tag';

const SHOW_MATTER = gql`
query matter($token: ID!) {
  matter(token: $token) {
    title
    token
    blocksCount
    blockScopeTypes
    blocks {
      scopeType
      token
      content {
        ... on StickyNote {
          body
          token
        }
        ... on Task {
          token
          body
          isCompleted
        }
      }
    }
  }
}
`;


export {
  SHOW_MATTER
}
