import { gql } from '@apollo/client';

export const UPDATE_COMMENT_MUTATION = gql`
  mutation updateComment($id: String!, $payload: comment_update_payload) {
    updateComment(_id: $id, payload: $payload) {
      id
      data {
        body
      }
    }
  }
`;
