const { model } = require('mongoose');
const { Book, User } = require('../models');

const resolvers = {
    Query:{
        Book: async () => {
            return Book.find({});
        },
        user: async (parent, { _id}) => {
            const params = _id ? {_id} : {};
            return User.find(params);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
    },
};

model.exports = resolvers;