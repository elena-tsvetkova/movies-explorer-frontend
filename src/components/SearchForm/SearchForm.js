import React, {useState} from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import './SearchForm.css';
import {useLocation} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function SearchForm({searchMovie, movies, onShort, isShort}) {
    const [newValue, setNewValue] = useState(localStorage.getItem('text') || '');
    const location = useLocation();
    const {register, formState: {errors}, handleSubmit} = useForm({ mode: 'onChange' });

    function onSubmit(data) {
        searchMovie(data.text, movies)
        if (location.pathname === '/movies') {
            localStorage.setItem('text', data.text)
        }
    }

    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault();
        }
    };

    function handleChangeValue(e) {
        setNewValue(e.target.value);
    }

    return (
        <section className='searchForm'>
            <form className='searchForm__Form' onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}
                  noValidate>
                <input placeholder='Фильм' className='searchForm__input' name='search' type='text'
                       {...register('text', {
                           required: 'Нужно ввести ключевое слово',
                           value: location.pathname === '/movies' ? newValue : ''
                       })}
                       onChange={(e) => handleChangeValue(e)}></input>
                <button type='submit' className='searchForm__button'></button>
                <hr className="searchForm__border"></hr>
                <span className='searchForm__input-error'>{errors.text?.message}</span>

            </form>

            <FilterCheckbox onShort={onShort}
                            searchMovie={searchMovie}
                            movies={movies}
                            isShort={isShort}
                            text={newValue}/>

        </section>
    )
}

export default SearchForm;