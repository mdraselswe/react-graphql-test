import { gql } from '@apollo/client';

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: String!, $payload: user_update_payload) {
    updateUser(_id: $id, payload: $payload) {
      id
      data {
        first_name
        email
      }
    }
  }
`;
