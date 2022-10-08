import { gql } from '@apollo/client';

export const CREATE_POST_MUTATION = gql`
  mutation createPost($payload: post_create_payload!) {
    createPost(payload: $payload) {
      id
    }
  }
`;
