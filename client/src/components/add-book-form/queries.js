import { gql } from '@apollo/client';

export const AUTHORS_QUERY = gql`
    query {
        authors {
            id
            firstName
            lastName
        }
    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation createBook(
        $title: String!
        $description: String
        $cover: String
        $authorId: String
    ) {
        createBook(
            title: $title,
            description: $description,
            cover: $cover,
            authorId: $authorId
        ) {
            id,
            title,
            description,
            published,
            cover,
        }
    }
`;
