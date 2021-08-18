const { GraphQLScalarType } = require('graphql');

const DateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.toISOString();
    },
});

module.exports = DateScalar;
