import gql from 'graphql-tag';



const listMatters = gql`
  query listMatters {
    matters {
      title
      token
    }
  }
`;

const showEntity = gql`
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
  listMatters,
  showEntity
}
