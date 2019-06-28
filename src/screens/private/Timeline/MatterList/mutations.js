import gql from 'graphql-tag';

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
  DESTROY_MATTER
}
