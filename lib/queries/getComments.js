import gql from 'graphql-tag';

const COMMENTS = gql`
  {
    comments(where: {}, sort: {}, page: 1, limit: 1, local: en, status: published) {
      data {
        body
      }
      id
      meta {
        created_at
        status
        updated_at
      }
      post {
        id
      }
    }
  }
`;

export default COMMENTS;
