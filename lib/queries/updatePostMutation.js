import { gql } from '@apollo/client';

export const UPDATE_POST_MUTATION = gql`
  mutation updatePost(
    $id: String!
    $payload: post_update_payload
    $connect: post_input_connection_payload
  ) {
    updatePost(_id: $id, payload: $payload, connect: $connect) {
      id
      comments {
        id
      }
      data {
        title
        body {
          html
        }
      }
    }
  }
`;
