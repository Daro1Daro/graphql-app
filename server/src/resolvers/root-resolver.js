const DateScalar = require('./DateScalar');
const Query = require('./Query');
const Mutation = require('./Mutation');
const Subscription = require('./Subscription');

const resolvers = {
    Date: DateScalar,
    Query,
    Mutation,
    Subscription,
};

module.exports = resolvers;
