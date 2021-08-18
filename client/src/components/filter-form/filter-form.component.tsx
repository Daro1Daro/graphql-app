import { FormEvent, FunctionComponent } from 'react';

interface FilterFormProps {
    filter: string;
    handleChange: (event: FormEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent) => void;
};

const FilterForm: FunctionComponent<FilterFormProps> = ({ filter, handleChange, handleSubmit }) =>
    <div className={'flex justify-center'}>
        <form className={'pa4 black-80'} onSubmit={handleSubmit}>
            <div className={'measure'}>
                <label htmlFor={'name'} className={'f6 b db mb2'}>Filter</label>
                <input
                    id={'filter'}
                    className={'input-reset ba b--black-20 pa2 mb2 db w-100'}
                    type={'text'}
                    value={filter}
                    onChange={handleChange}
                />
            </div>
            <button type={'submit'} className={'db center'}> FETCH </button>
        </form>
    </div>;

export default FilterForm;
