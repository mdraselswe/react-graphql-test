import gql from 'graphql-tag';

const CREATE_TACO = gql`
 mutation createTaco($name: String!, $description: String!) {
    createTaco(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export default CREATE_TACO;

// const POST_MUTATION = gql`
//   mutation createPost($title: String!, $body: String!) {
//     createPost(title: $title, body: $body) {
//       id
//       phone
//     }
//   }
// `;

// export default POST_MUTATION;
