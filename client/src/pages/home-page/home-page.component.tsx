import BookCatalogue from '../../components/books-catalogue/books-catalogue.component';

const HomePage = () => (
    <div className={'center w-80'}>
        <h1 className={'f2 lh-copy tc'}>Book App</h1> 
        <BookCatalogue />
    </div>
);

export default HomePage;
