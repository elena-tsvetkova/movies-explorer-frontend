import React,  {useState} from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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


function App() {
    const history = useHistory();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    function onClose() {
        setIsNavigationOpen(false);}

        return (
            <div className="page">
                <div className="page__content">
                    <Switch>
                        <Route exact={true} path='/'>
                            <Header className=" header header-home">
                                <div className="header-home__navigation">
                                    <a className='header-home__link'>Регистрация</a>
                                    <button className="header-home__button" onClick={() => history.push('./signin')}
                                            type='button'>Войти</button>
                                </div>
                            </Header>
                            <Main/>
                            <Footer/>
                        </Route>
                        <Route exact={true} path='/movies'>

                            <Header className='header'>
                                <Navigation
                                isOpen = {isNavigationOpen}
                                onClose = {onClose}/>
                                <button className='header__burger' type='button' onClick = {()=>setIsNavigationOpen(true)}/>
                            </Header>

                            <Movies/>

                            <Footer/>
                        </Route>

                    </Switch>

                </div>
            </div>
        )

}

export default App;