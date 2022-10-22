import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Error from "../error/error.js";
import moviesApi from '../../utils/MoviesApi.js'
import mainApi from '../../utils/MainApi.js';
import * as auth from '../../utils/AuthApi.js';
import {UserContext} from '../../UserContext/UserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {
    const history = useHistory();
    const location = useLocation();
    const Time = 40;

    const [thisUser, setThisUser] = useState('');
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState('');
    const [messageOfSearch, setMessageOfSearch] = useState('');
    const [movieCards, setMovieCards] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [savedMoviesCard, setSavedMovieCards] = useState([]);
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [searchedSavedMoviesCard, setSearchedSavedMovieCards] = useState([]);
    const [isSearched, setIsSearched] = useState(false);


    function onClose() {
        setIsNavigationOpen(false);
    }

    function getUser(token) {
        mainApi.getUserInfo(token)
            .then((data) => {
                setLoggedIn(true);
                setThisUser(data);
                mainApi.getToken(token);
                history.push(location.pathname);
            })
            .catch((err) => {
                console.log(err)
                checkUnauthorized(err)
            });
    }

    function getUserInfo(token) {
        auth.getUserInfo(token)
            .then((data) => {
                setLoggedIn(true);
                setThisUser(data);
                mainApi.getToken(token);
                history.push(location.pathname);
            })
            .catch((err) => {
                checkUnauthorized(err)
                console.log(err)
            });
    }

    function onRegister(data) {
        auth.register(data.email, data.password, data.name)
            .then((res) => {
                if (res) {
                    setMessageOfSearch('')
                    onAuthorize(data);
                }
            })
            .catch((err) => {
                console.log(err);
                checkUnauthorized(err)
                setErrorMessage(true)
            })
    }

    function onAuthorize(data) {
        auth.authorize(data.email, data.password)
            .then((data) => {
                if (data.token) {
                    getUser(data.token);
                }
            })
            .catch(err => {
                checkUnauthorized(err)
                console.log(err)
            })
    }

    function onUpdateUser(data) {
        mainApi.updateUser(data)
            .then((userStats) => {
                setThisUser(userStats);
                setMessage('Данные успешно обновлены')
            })
            .catch((err) => {
                console.log(err);
                checkUnauthorized(err)
                setMessage('Произошла ошибка при попытке обновить данные. Попробуйте позже')
            })
    }

    function tokenCheck() {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            if (token) {
                getUserInfo(token);
            }
        }
    }

    useEffect(() => {
        tokenCheck()
    }, []);

    useEffect(() => {
        if (loggedIn) {
            moviesApi.getCards()
                .then((data) => {
                    localStorage.setItem('movies', JSON.stringify(data));
                    setMovies(JSON.parse(localStorage.getItem('movies')))
                })
                .catch((err) => {
                    checkUnauthorized(err)
                    console.log(err);
                    setMessageOfSearch('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
                })

            getSavedMovies()
            if (localStorage.getItem('movieCards')) {
                const loadMovies = JSON.parse(localStorage.getItem('movieCards'));
                setMovieCards(loadMovies.map((movie) => ({
                    movieId: movie.id,
                    country: movie.country,
                    description: movie.description,
                    nameEN: movie.nameEN,
                    nameRU: movie.nameRU,
                    year: movie.year,
                    duration: movie.duration,
                    trailerLink: movie.trailerLink,
                    director: movie.director,
                    image: `https://api.nomoreparties.co/${movie.image.url}`,
                    thumbnail: `https://api.nomoreparties.co/${movie.image.url}`
                })));
            }
        }
    }, [loggedIn]);

    function searchMovie(text, movies) {
        const moviesFilter = movies.filter((item) =>
            (item.nameRU.toLowerCase().includes(text.toLowerCase()))
            && (isShort === true ? item.duration <= Time : ' '));
        if (location.pathname === '/movies') {
            setMessageOfSearch('')
            setIsLoad(true);
            setTimeout(() => {
                setIsLoad(false);
                if (moviesFilter.length === 0) {
                    setMessageOfSearch('Ничего не найдено')
                } else {
                    setMessageOfSearch('')
                }
                setMovieCards(
                    moviesFilter.map((movie) => ({
                        movieId: movie.id,
                        country: movie.country,
                        description: movie.description,
                        nameEN: movie.nameEN,
                        nameRU: movie.nameRU,
                        year: movie.year,
                        duration: movie.duration,
                        trailerLink: movie.trailerLink,
                        director: movie.director,
                        image: `https://api.nomoreparties.co/${movie.image.url}`,
                        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`
                    }))
                )
            }, 2000)

            localStorage.setItem('movieCards', JSON.stringify(moviesFilter))

        } else {
            setIsSearched(true);
            if (moviesFilter.length === 0) {
                setMessageOfSearch('Ничего не найдено')
            } else {
                setMessageOfSearch('')
            }
            setSearchedSavedMovieCards(moviesFilter)
        }
    }

    function isSavedMovie(data) {
        return savedMoviesCard.some((item) => {
            if (item.movieId === data.movieId) {
                return item;
            }
        })
    }

    function handleAction(data) {
        if (isSavedMovie(data) === false) {
            saveMovies(data)
        } else {
            deleteSavedMovie(data)
        }
    }

    function saveMovies(data) {
        mainApi.createMovies(data)
            .then((data) => {
                getSavedMovies([data, ...savedMoviesCard])
            })
            .catch((err) => {
                checkUnauthorized(err)
                setMessageOfSearch('Невозможно сохранить фильм')
                console.log(err);
            })
    }

    function deleteSavedMovie(data) {
        savedMoviesCard.forEach((item) => {
            if (item.movieId === data.movieId) {
                onDeleteMovie(item);
            }
        })
    }

    function checkUnauthorized(err) {
        if (err === 401){
            onLogAut()
        }
    }

    function getSavedMovies() {
        mainApi.getMovies()
            .then((data) => {
                console.log('data', data)
                setSavedMovieCards(
                    data.map((savedMovie) => ({
                            id: savedMovie._id,
                            movieId: savedMovie.movieId,
                            country: savedMovie.country,
                            image: savedMovie.image,
                            nameEN: savedMovie.nameEN,
                            nameRU: savedMovie.nameRU,
                            year: savedMovie.year,
                            description: savedMovie.description,
                            duration: savedMovie.duration,
                            trailerLink: savedMovie.trailerLink,
                            director: savedMovie.director,
                            thumbnail: savedMovie.thumbnail
                        })
                    )
                )
            })
            .catch((err) => {
                checkUnauthorized(err)
                console.log(err);
            })
    }

    function onDeleteMovie(data) {
        mainApi.deleteMovies(data, data.id)
            .then(() => {
                const result = savedMoviesCard.filter(item => item.id !== (data.id));
                setSavedMovieCards(result);
            })
            .catch((err) => {
                checkUnauthorized(err)
                console.log(err);
            })
    }

    function onLogAut() {
        localStorage.removeItem('token')
        localStorage.removeItem('text')
        localStorage.removeItem('movies')
        localStorage.removeItem('movieCards')
        localStorage.removeItem('isShort')
        setMovieCards([]);
        setSearchedSavedMovieCards([]);
        setLoggedIn(false);
        history.push('/')
    }

    return (
        <UserContext.Provider value={thisUser}>
            <div className="page">
                <div className="page__content">
                    <Header className=" header header-home"
                            loggedIn={loggedIn}
                            isOpen={isNavigationOpen}
                            onClose={onClose}
                            onClick={setIsNavigationOpen}>
                    </Header>

                    <Switch>
                        <Route exact path='/'>

                            <Main loggedIn={loggedIn}
                                  isOpen={isNavigationOpen}
                                  onClose={onClose}
                                  onClick={setIsNavigationOpen}/>
                        </Route>

                        <ProtectedRoute path='/movies'
                                        loggedIn={loggedIn}
                                        component={Movies}
                                        movieCards={movieCards}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                                        searchMovie={searchMovie}
                                        isSavedMovie={isSavedMovie}
                                        handleAction={handleAction}
                                        movies={movies}
                                        isLoad={isLoad}
                                        onShort={setIsShort}
                                        isShort={isShort}
                                        message={messageOfSearch}>
                        </ProtectedRoute>

                        <ProtectedRoute path='/saved_movies'
                                        getSavedMovies={getSavedMovies}
                                        loggedIn={loggedIn}
                                        component={SavedMovies}
                                        movieCards={savedMoviesCard}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                                        searchedMovie={searchedSavedMoviesCard}
                                        onDeleteMovie={onDeleteMovie}
                                        searchMovie={searchMovie}
                                        onShort={setIsShort}
                                        isShort={isShort}
                                        isSearched={isSearched}
                                        onSearched={setIsSearched}
                                        message={messageOfSearch}
                                        onSetMessage={setMessageOfSearch}>
                        </ProtectedRoute>

                        <Route path='/signup'>
                            {loggedIn ? <Redirect to='/movies'/> :
                                <Register onSubmit={onRegister} isErrorMessage={errorMessage}/>}
                        </Route>

                        <ProtectedRoute path='/profile'
                                        loggedIn={loggedIn}
                                        component={Profile}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                                        onLogAut={onLogAut}
                                        onUpdateUser={onUpdateUser}
                                        message={message}
                                        onSetMessage={setMessage}
                        >
                        </ProtectedRoute>

                        <Route path='/signin'>
                            {loggedIn ? <Redirect to='/movies'/> : <Login onSubmit={onAuthorize}/>}
                        </Route>

                        <Route exact={true} path='*'>
                            <Error/>
                        </Route>

                    </Switch>
                    <Footer/>
                </div>
            </div>
        </UserContext.Provider>
    )

}

export default App;