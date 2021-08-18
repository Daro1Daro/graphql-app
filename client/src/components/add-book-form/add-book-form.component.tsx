import { FormEvent, ChangeEvent, FunctionComponent, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { AUTHORS_QUERY, CREATE_BOOK_MUTATION } from './queries';

interface IBook {
    title: string;
    description: string;
    published: string | null;
    cover: string;
    authorId: string | undefined;
};

interface IAuthor {
    id: string;
    firstName: string;
    lastName: string;
};

interface AddBookFormProps {
    toggle: () => void;
};

const AddBookForm: FunctionComponent<AddBookFormProps> = ({ toggle }) => {
    const [book, setBook] = useState<IBook>({
        title: '',
        description: '',
        published: null,
        cover: '',
        authorId: '',
    });

    const { loading, data } = useQuery(AUTHORS_QUERY);
    const [createBook] = useMutation(CREATE_BOOK_MUTATION, { variables: {
        title: book.title,
        description: book.description,
        cover: book.cover,
        authorId: book.authorId,
    } });

    const handleChangeBook = (event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = event.currentTarget;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createBook();
        toggle();
        console.log(book);
    };

    const authors = data ? !loading && data.authors : [];

    return (
        <div className={'flex justify-center'}>
            <form className={'pa4 pt1 black-80'} onSubmit={handleSubmit}>
                <div className={'measure'}>
                    <label htmlFor={'title'} className={'f6 b db mb2'}>Title</label>
                    <input
                        id={'title'}
                        name={'title'}
                        className={'input-reset ba b--black-20 pa2 mb2 db w-100'}
                        type={'text'}
                        value={book.title}
                        onChange={handleChangeBook}
                        required
                    />
                    <label htmlFor={'cover'} className={'f6 b db mb2'}>Cover</label>
                    <input
                        id={'cover'}
                        name={'cover'}
                        className={'input-reset ba b--black-20 pa2 mb2 db w-100'}
                        type={'text'}
                        value={book.cover}
                        onChange={handleChangeBook}
                    />
                    <label htmlFor={'author'}>Author</label>
                    <select
                        id={'author'}
                        name={'authorId'}
                        className={'input-reset ba b--black-20 pa2 mb2 db w-100'}
                        value={book.authorId}
                        onChange={handleChangeBook}
                    >
                        <option value={''}>unknown</option>
                        {
                            authors.map((author: IAuthor) => <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>)
                        }
                    </select>
                </div>
                <button type={'submit'} className={'db center'}> ADD </button>
            </form>
        </div>
    );
};

export default AddBookForm;
