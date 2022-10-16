import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';


function Movies ({movieCards, searchMovie, message, movies, isLoad, onShort, isShort, isSavedMovie, handleAction}) {

    return (
        <section>

            <SearchForm searchMovie = {searchMovie}
                movies={movies}
                onShort = {onShort}
                isShort = {isShort}
                movieCards={movieCards}/>

            <Preloader />

            <MoviesCardList className={'moviesCard__button'}/>

            <section className='movies__add'>
                <button className='movies__add-button' type='button'>Ещё</button>
            </section>

        </section>
    );
}

export default Movies;