function newBookSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_BOOK")
};

const newBook = {
    subscribe: newBookSubscribe,
    resolve: payload => {
        return payload
    },
};

module.exports = {
    newBook,
};
