import { FunctionComponent, MouseEvent } from 'react';

interface AddBookButtonProps {
    onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const AddBookButton: FunctionComponent<AddBookButtonProps> = ({ onClick }) =>
    <div className={'flex justify-end mb3'}>
        <a className={'f6 link dim ba bw1 ph3 pv2 mb2 dib navy'} onClick={onClick} href="/">ADD NEW BOOK</a>
    </div>;

export default AddBookButton;
