import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function App() {
        const history = useHistory();


 return (
        <div className="page">
            <div className="page__content">
                <Switch>
                    <Route exact={true} path = '/'>
                        <Header className =" header header-home">
                            <div className= "header-home__navigation">
                                <a className='header-home__link'>Регистрация</a>
                                <button className="header-home__button" onClick= {() => history.push('./signin')} type='button'>Войти</button>
                            </div>
                        </Header>
                        <Main />

                    </Route>


                </Switch>

            </div>
        </div>
    )
}

export default App;