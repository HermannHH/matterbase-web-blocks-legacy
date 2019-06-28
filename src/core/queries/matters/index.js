import gql from 'graphql-tag';



const list = gql`
  query listMatters {
    matters {
      title
      token
    }
  }
`;

const show = gql`
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
  list,
  show
}
