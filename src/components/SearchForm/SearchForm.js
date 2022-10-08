import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import './SearchForm.css';

function SearchForm () {
    return(
        <section className='searchForm'>
            <form className='searchForm__Form'>
                <input placeholder='Фильм' className='searchForm__input'  name='search'  type='text' required></input>
                <button type='submit' className='searchForm__button'></button>
                <hr className="searchForm__border"></hr>
            </form>

            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;