import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
  query Books($filter: String) {
    books(filter: $filter) {
      id
      title
      description
      published
      cover
      author {
          firstName
          lastName
      }
    }
  }
`;

export const NEW_BOOKS_SUBSCRIPTION = gql`
  subscription {
    newBook {
      id
      title
      cover
      author {
        id
        firstName
        lastName
      }
    }
  }
`;