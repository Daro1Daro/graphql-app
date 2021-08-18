const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { PubSub } = require('apollo-server');

const fs = require('fs');
const path = require('path');

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');
const resolvers = require('./resolvers/root-resolver');
const prisma = new PrismaClient();
const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db: prisma,
        pubsub,
    },
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );
