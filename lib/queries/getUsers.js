import gql from 'graphql-tag';

const USERS = gql`
  {
    users(sort: {}, page: 1, limit: 1, local: en, status: draft, where: {}) {
      data {
        body
        email
        first_name
        phone
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

// const USERS = gql`
//   query users {
//     users(sort: {}, page: 1, limit: 1, local: en, status: draft, where: {}) {
//       data {
//         body
//         email
//         first_name
//         phone
//       }
//       id
//       meta {
//         created_at
//         status
//         updated_at
//       }
//     }
//   }
// `;

export default USERS;
