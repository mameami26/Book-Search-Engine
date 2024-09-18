import { gql } from "@apollo/client";

export const QUERY_BOOK = gql`
  query book {
    book {
      _id
      name
    }
  }
`;
export const QUERY_USER = gql`
  query user($_id: String) {
    user(_id: $_id) {
      _id
      book1
      book2
      book3
    }
  }
`;
