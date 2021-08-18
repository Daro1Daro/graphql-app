import { FormEvent, MouseEvent, FunctionComponent, useState } from "react";
import { useQuery, NetworkStatus } from '@apollo/client';

import FilterForm from '../filter-form/filter-form.component';
import AddBookButton from '../add-book-button/add-book-btn.component';
import AddBookForm from '../add-book-form/add-book-form.component';
import BookOverview from '../book-overview/book-overview.component';
import Modal from '../modal/modal.component';

import { BOOKS_QUERY, NEW_BOOKS_SUBSCRIPTION } from './queries';

const BookCatalogue: FunctionComponent = () => {
    const [filter, setFilter] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const { loading, data, refetch, networkStatus, subscribeToMore } = useQuery(BOOKS_QUERY, {
        notifyOnNetworkStatusChange: true,
    });

    subscribeToMore({
        document: NEW_BOOKS_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const newBook = subscriptionData.data.newBook;
            const exists = prev.books.find(({ id }: any) => id === newBook.id);
            if (exists) return prev;

            return Object.assign({}, prev, {
                books: [newBook, ...prev.books],
            });
        }
    });

    const toggleModal = () => setOpenModal(!openModal);

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setFilter(value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        refetch({ filter });
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        toggleModal();
    };

    const isLoading = loading || networkStatus === NetworkStatus.refetch;
    const books = data ? !isLoading && data.books : undefined;

    return (
        <div className={'center'}>
            <FilterForm {...{ filter, handleChange, handleSubmit }} />
            <AddBookButton onClick={handleClick} />
            <BookOverview {...{ books, isLoading }} />
            <Modal
                isOpen={openModal}
                headerText='Add new book to the catalogue'
                modalContent={
                    <AddBookForm
                        toggle={toggleModal}
                    />
                }
            />
        </div>
    );
};

export default BookCatalogue;
