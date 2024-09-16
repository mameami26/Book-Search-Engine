const typeDefs = `
  # Define the Book type
  type Book {
    bookId: ID!
    authors: [String!]!
    description: String
    title: String!
    image: String
    link: String
  }

  # Define the User type
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book!]!
  }

  # Define the Auth type
  type Auth {
    token: String!
    user: User!
  }

  # Define input types for mutations
  input BookInput {
    authors: [String!]!
    description: String
    title: String!
    bookId: ID!
    image: String
    link: String
  }

  # Define the Query type
  type Query {
    me: User
  }

  # Define the Mutation type
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
