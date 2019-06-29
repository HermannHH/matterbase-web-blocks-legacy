import gql from 'graphql-tag';

const LIST_MATTERS = gql`
  query listMatters {
    matters {
      title
      token
    }
  }
`;


export {
  LIST_MATTERS
}
