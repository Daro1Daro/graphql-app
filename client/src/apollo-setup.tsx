import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    split
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

interface Definition {
    kind: string;
    operation?: string;
};

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation }: Definition = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' &&
            operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export default apolloClient;
