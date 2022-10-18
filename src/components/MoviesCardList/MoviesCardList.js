import React, {useEffect, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

const countPC = 3;
const countPhone = 2;

function MoviesCardList({movieCards, className, isLoad, isSavedMovie, onDeleteMovie, handleAction}) {
    const [moviesOnDisplay, setMoviesOnDisplay] = useState(0);
    const display = window.innerWidth;

    function loadMovieCards() {

        if (display > 1006) {
            setMoviesOnDisplay(12);
        } else if (display > 750) {
            setMoviesOnDisplay(8);
        } else if (display < 750) {
            setMoviesOnDisplay(5);
        }
    }

    useEffect(() => {
        loadMovieCards()
    }, [])

    window.resize = function () {
        setTimeout(() => {
            loadMovieCards()
        }, 500)
    }

    function loadOtherMovies() {
        if (display > 1006) {
            setMoviesOnDisplay(moviesOnDisplay + countPC)
        } else if (display > 750) {
            setMoviesOnDisplay(moviesOnDisplay + countPhone)
        } else if (display < 750) {
            setMoviesOnDisplay(moviesOnDisplay + countPhone)
        }
    }

    return (
        <section className={'movieCardList' + (isLoad ? ' movieCardList_none' : '')}>
            <ul className='movieCardList__cards'>

                {movieCards.slice(0, moviesOnDisplay).map((movie) => (
                    <MoviesCard
                        key={movie.movieId || movie.id}
                        id={movie.id}
                        movieId={movie.movieId}
                        country={movie.country}
                        image={movie.image}
                        description={movie.description}
                        duration={movie.duration}
                        nameRU={movie.nameRU}
                        className={className}
                        trailerLink={movie.trailerLink}
                        thumbnail={movie.thumbnail}
                        movie={movie}
                        isSavedMovie={isSavedMovie}
                        onDeleteMovie={onDeleteMovie}
                        handleAction={handleAction}>
                    </MoviesCard>
                ))}

            </ul>
            {(movieCards.length > moviesOnDisplay || movieCards.length < !3) ? (
                <section className='movies__add'>
                    <button className='movies__add-button' type='button' onClick={() => loadOtherMovies()}>Ещё</button>
                </section>
            ) : null}
        </section>
    );
}

export default MoviesCardList;
