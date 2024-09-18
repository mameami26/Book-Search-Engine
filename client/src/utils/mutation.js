import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($book1: String!, $book2: String!) {
    createUser(book1: $book1, book2: $book2) {
      _id
      book1
      book2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $bookNum: Int!) {
    creatVote(_id: $_id, bookNum: $bookNum) {
      _id
      book1
      book2
      book1_votes
      book2_votes
    }
  }
`;
