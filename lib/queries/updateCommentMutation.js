import { gql } from '@apollo/client';

export const UPDATE_COMMENT_MUTATION = gql`
  mutation updateComment(
    $id: String!
    $payload: comment_update_payload
    $connect: comment_input_connection_payload
  ) {
    updateComment(_id: $id, payload: $payload, connect: $connect) {
      id
      data {
        body
      }
      post {
        id
      }
    }
  }
`;
