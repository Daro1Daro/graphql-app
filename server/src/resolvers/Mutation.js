const Mutation = {
    createBook: (parent, args, context) => {
        const { title, description, published, authorId, cover } = args;
        let data = {
            title,
            description,
            published,
            cover,
        };
        if (authorId) {
            data = {
                ...data,
                author: {
                    connect: {
                        id: parseInt(authorId),
                    },
                },
            }
        }
        const newBook = context.db.book.create({data});
        context.pubsub.publish("NEW_BOOK", newBook)

        return newBook;
    },
    deleteBook: (parent, args, context) => {
        const { bookId } = args;
        const deletedBook = context.db.book.delete({
            where: {
                id: bookId,
            },
        });

        return deletedBook;
    },
    createAuthor: (parent, args, context) => {
        const newAuthor = context.db.author.create({
            data: {
                ...args,
            }
        });

        return newAuthor;
    }
};

module.exports = Mutation;
