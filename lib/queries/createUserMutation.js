import { gql } from "@apollo/client";

// export const CREATE_USER_MUTATION = gql`
//     mutation updateUser($input: CreateUserInput!) {
//         updateUser(input: $input) {
//             id
//             email
//             first_name
//             last_name
//             phone
//             meta {
//                 created_at
//                 updated_at
//                 status
//             }
//         }
//     }
// `;

export const CREATE_USER_MUTATION = gql`
    mutation updateUser($firstName: String!, $email: String!) {
        updateUser(firstName: $firstName, email: $email) {
            id
            email
            first_name
        }
    }
`;
