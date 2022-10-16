import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import {Link, useHistory, useLocation} from 'react-router-dom';

function Header({loggedIn, isOpen, onClick, onClose}) {
    const history = useHistory();
    const location = useLocation();

    return (
        <header
            className={'header' + (location.pathname === '/' ? ' header-home' : '') + (location.pathname === '/signin' ? ' header_none' : '') + (location.pathname === '/signup' ? ' header_none' : '')}>
            <Link to='/'>
                <img className="header__logo" src={logo} alt="эмблема сайта"/>
            </Link>

            {loggedIn ? (
                <><Navigation isOpen={isOpen} onClose={onClose}/>
                    <button className='header__burger ' type='button' onClick={() => onClick(true)}/>
                </>
            ) : (
                <div className="header-home__navigation">
                    <a className='header-home__link'
                       onClick={() => history.push('./signup')}>Регистрация</a>
                    <button className="header-home__button" onClick={() => history.push('./signin')}
                            type='button'>Войти
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;