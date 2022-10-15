import React, {useState} from 'react';
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Navigation from "../Navigation/Navigation";
import Error from "../error/error.js";
import moviesApi from '../../utils/MoviesApi.js'
import mainApi from '../../utils/MainApi.js';
import * as auth from '../../utils/AuthApi.js';
import {getUserInfo} from "../../utils/AuthApi.js";
import {UserContext} from '../../UserContext/UserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {
    const history = useHistory();
    const location = useLocation();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    // const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [movieCards, setMovieCards] = useState([]);
    const [savedMoviesCard, setSavedMovieCards] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [message, setMessage] = useState('');
    const [searchedSavedMoviesCard, setSearchedSavedMovieCards] = useState([]);
    const [isSearched, setIsSearched] = useState(false);


    function onClose() {
        setIsNavigationOpen(false);
    }

    function getUser(token) {
        mainApi.getUserInfo(token)
            .then((data) => {
                setLoggedIn(true);
                setCurrentUser(data);
                mainApi.getToken(token);
                history.push(location.pathname);
            })
            .catch((err) => console.log(err));
    }

    function onRegister(data) {
        auth.register(data.email, data.password, data.name)
            .then((res) => {
                if (res) {
                    onAuthorize(data);
                }
            })
            .catch((err) => {
                console.log(err);
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
            .catch(err => console.log(err));
    }

    function onUpdateUser(data) {
        mainApi.updateUser(data)
            .then((userStats) => {
                setCurrentUser(userStats);
                setMessage('Данные успешно обновлены')
            })
            .catch((err) => {
                console.log(err);
                setMessage('Произошла ошибка при попытке обновить данные. Попробуйте позже')
            })
    }

    function onLogAut() {
        localStorage.removeItem('token')
        localStorage.removeItem('text')
        localStorage.removeItem('movies')
        localStorage.removeItem('movieCards')
        localStorage.removeItem('isShort')
        setLoggedIn(false);
        history.push('/')
    }

    return (
        <UserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">

                    <Switch>
                        <Route exact path='/'>
                            <Header className=" header header-home"
                                    loggedIn={loggedIn}
                                    isOpen={isNavigationOpen}
                                    onClose={onClose}
                                    onClick={setIsNavigationOpen}>

                            </Header>
                            <Main loggedIn={loggedIn}
                                  isOpen={isNavigationOpen}
                                  onClose={onClose}
                                  onClick={setIsNavigationOpen}/>
                            {/*<Footer/>*/}
                        </Route>
                        {/*<Route path='/movies'>*/}

                        {/*    <Header className='header'>*/}
                        {/*        <Navigation*/}
                        {/*            isOpen={isNavigationOpen}*/}
                        {/*            onClose={onClose}/>*/}
                        {/*        <button className='header__burger' type='button'*/}
                        {/*                onClick={() => setIsNavigationOpen(true)}/>*/}
                        {/*    </Header>*/}

                        {/*    <Movies/>*/}

                        {/*    <Footer/>*/}
                        {/*</Route>*/}
                        <ProtectedRoute path='/movies'
                                        loggedIn={loggedIn}
                                        component={Movies}
                                        movieCards={movieCards}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                            // searchMovie = {searchMovie}
                            // isSavedMovie = {isSavedMovie}
                                        movies={movies}
                                        isLoad={isLoad}
                                        onShort={setIsShort}
                                        isShort={isShort}
                            // handleAction={handleAction}
                                        message={message}>

                        </ProtectedRoute>

                        {/*<Route exact={true} path='/saved_movies'>*/}

                        {/*    <Header className='header'>*/}
                        {/*        <Navigation*/}
                        {/*            isOpen={isNavigationOpen}*/}
                        {/*            onClose={onClose}/>*/}
                        {/*        <button className='header__burger' onClick={() => setIsNavigationOpen(true)}*/}
                        {/*                type='button'/>*/}
                        {/*    </Header>*/}
                        {/*    <SavedMovies/>*/}
                        {/*    <Footer/>*/}
                        {/*</Route>*/}
                        <ProtectedRoute path='/saved_movies'
                            // getSavedMovies = {getSavedMovies}
                                        loggedIn={loggedIn}
                                        component={SavedMovies}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                                        movieCards={savedMoviesCard}
                                        searchedMovie={searchedSavedMoviesCard}
                            // onDeleteMovie = {onDeleteMovie}
                            // searchMovie = {searchMovie}
                                        onShort={setIsShort}
                                        isShort={isShort}
                                        isSearched={isSearched}>

                        </ProtectedRoute>

                        {/*<Route path='/signup'>*/}
                        {/*    <Register*/}
                        {/*        onSubmit={onRegister}*/}
                        {/*        isErrorMessage={errorMessage}/>*/}
                        {/*</Route>*/}
                        <Route path='/signup'>
                            {loggedIn ? <Redirect to='/movies'/> :
                                <Register onSubmit={onRegister}
                                          isErrorMessage={errorMessage}/>}
                        </Route>

                        {/*<Route exact={true} path='/profile'>*/}

                        {/*    <Header className='header'>*/}
                        {/*        <Navigation*/}
                        {/*            isOpen={isNavigationOpen}*/}
                        {/*            onClose={onClose}/>*/}

                        {/*        <button className='header__burger' type='button'*/}
                        {/*                onClick={() => setIsNavigationOpen(true)}/>*/}
                        {/*    </Header>*/}

                        {/*    <Profile/>*/}
                        {/*</Route>*/}
                        <ProtectedRoute path='/profile'
                                        loggedIn={loggedIn}
                                        component={Profile}
                                        isOpen={isNavigationOpen}
                                        onClose={onClose}
                                        onClick={setIsNavigationOpen}
                                        onLogAut={onLogAut}
                                        onUpdateUser={onUpdateUser}
                                        message={message}>

                        </ProtectedRoute>

                        {/*<Route path='/signin'>*/}
                        {/*    <Login/>*/}
                        {/*</Route>*/}


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