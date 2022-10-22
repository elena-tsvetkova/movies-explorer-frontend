import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';


function Movies({movieCards, searchMovie, message, movies, isLoad, onShort, isShort, isSavedMovie, handleAction}) {
    return (
        <section>
            <div className='movies__container'>
                <SearchForm searchMovie={searchMovie}
                            movies={movies}
                            onShort={onShort}
                            isShort={isShort}
                            movieCards={movieCards}/>

                <Preloader isLoad={isLoad}/>

                <p className='movies__message'> {message}</p>

                <MoviesCardList movieCards={movieCards}
                                isSavedMovie={isSavedMovie}
                                isLoad={isLoad}
                                handleAction={handleAction}>
                </MoviesCardList>

            </div>
        </section>
    );
}

export default Movies;