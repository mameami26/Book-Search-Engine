const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // Add the authMiddleware function
  authMiddleware: function (req, res, next) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If token is sent via authorization header as "Bearer <token>", extract the token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token, return an authentication error
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }

    // Verify token and decode it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data; // Add user data to request object
    } catch {
      return res.status(401).json({ message: 'Invalid token!' });
    }

    // Proceed to the next middleware or route handler
    next();
  },
};
