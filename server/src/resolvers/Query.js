const Query = {
    books: (parents, args, context) => {
        const { filter, orderBy } = args;

        const where = filter
        ? {
          OR: [
            { title: { contains: filter } },
            { description: { contains: filter } },
          ],
        }
        : {}

        return context.db.book.findMany({
            where,
            include: {
                author: true,
            },
            orderBy,
        });
    },
    authors: (parents, args, context) => {
        return context.db.author.findMany({
            include: {
                books: true,
            },
        });

    }
};

module.exports = Query;
