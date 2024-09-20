import { gql } from "@apollo/client";

// Query to get the current logged-in user (the "me" query)
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
