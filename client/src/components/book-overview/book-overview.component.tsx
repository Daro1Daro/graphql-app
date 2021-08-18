import { FunctionComponent } from 'react';

import Book from '../book/book.component';
import { BookProps } from '../book/book.component';

import WithSpinner from '../with-spinner/with-spinner.component';

interface BookOverviewProps {
    books: [BookProps];
};

const BookOverview: FunctionComponent<BookOverviewProps> = ({ books }) => 
    <div className={'flex flex-wrap justify-center mb3'}>
        {books.map((book: BookProps) => <Book key={book.id} {...book} />)}
    </div>;

export default WithSpinner(BookOverview);
