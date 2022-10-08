import { gql } from '@apollo/client';

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($body: String!) {
    createComment(body: $body) {
      id
      body
    }
  }
`;
