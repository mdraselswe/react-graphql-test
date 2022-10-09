import gql from 'graphql-tag';

const POSTS = gql`
  {
    posts(page: 1, limit: 1, local: en, status: published, where: {}, sort: {}) {
      comments(
        where: {}
        sort: {}
        page: 1
        limit: 1
        local: en
        status: published
      ) {
        id
      }
      data {
        title
        body {
          html
        }
      }
      id
      meta {
        created_at
        status
        updated_at
      }
    }
  }
`;

export default POSTS;
