import { gql } from '@apollo/client';

export const UPDATE_POST_MUTATION = gql`
  mutation updatePost($id: String!, $payload: post_update_payload) {
    updatePost(_id: $id, payload: $payload) {
      id
      data {
        title
        body {
          html
        }
      }
    }
  }
`;
