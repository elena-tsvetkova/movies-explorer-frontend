import React, {useEffect} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies ({movieCards, onDeleteMovie, searchMovie,
                       onShort, isShort, getSavedMovies, loggedIn,
                       searchedMovie, isSearched, message, onSearched, onSetMessage}) {
    let isSearch = isSearched;

    useEffect(() => {
        if (loggedIn) {
            onSearched(false);
            onSetMessage('')
            getSavedMovies()
        }
    }, [loggedIn])

    return (
        <section>
            <div className='movies__container'>
                <SearchForm searchMovie={searchMovie}
                            movies={movieCards}
                            onShort={onShort}
                            isShort={isShort}/>

                <p className='movies__message'> {message}</p>

                {(!isSearch) ? (<MoviesCardList movieCards={movieCards} onDeleteMovie={onDeleteMovie}/>)
                    : (<MoviesCardList movieCards={searchedMovie} onDeleteMovie={onDeleteMovie}/>)}

            </div>
        </section>
    );
}

export default SavedMovies;