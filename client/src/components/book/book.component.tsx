import { FunctionComponent } from "react";

import './book.styles.scss';

export interface BookProps {
    id: number;
    title: string;
    description: string;
    published: string;
    cover: string;
    author: {
        firstName: string;
        lastName: string;
    }
};

const Book: FunctionComponent<BookProps> = ({ title, description, published, cover }) =>
    <div className={'book-card pa3 ma2 bg-light-blue br2'}>
        <div className={'book-cover-container center mb2'}>
            <img src={cover} className={'book-cover-img db center'} alt={'book-cover'} />
        </div>
        <div className={'book-info'}>
            {title}
        </div>
    </div>;

export default Book;
