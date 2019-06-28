import gql from 'graphql-tag';

const create = gql`
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

const destroy = gql`
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

const update = gql`
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


export {
  create,
  destroy,
  update
}
