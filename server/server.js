const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  // Await the start of the Apollo Server
  await server.start();

  // Middleware for ApolloServer
  app.use('/graphql', expressMiddleware(server));

  // Start listening on the specified port
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve client/build as static assets if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// Use routes
app.use(routes);

// Start Apollo server and Express app
startApolloServer();
