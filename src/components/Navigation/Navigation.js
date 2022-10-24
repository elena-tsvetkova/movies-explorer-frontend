import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'
import Icon from '../../images/icon-main.svg';

function Navigation({isOpen, onClose}) {
    return (
        <section className={'navigation' + (isOpen ? ' navigation_visible' : '')}>
            <div className="navigation__container">
                <nav className="navigation__links">
                    <Link to='/' className='navigation__link' onClick={onClose}>Главная</Link>
                    <Link to='/movies' className='navigation__link' onClick={onClose}>Фильмы</Link>
                    <Link to='saved_movies' className='navigation__link navigation__link_normal' onClick={onClose}>Сохраненные фильмы</Link>
                </nav>

                <Link className='navigation__account' to='/profile'>
                    <p className='navigation__account-text'>Аккаунт</p>
                    <div className='navigation__account-icon'>
                        <img className='navigation__account-image' src={Icon} alt='Аккаунт'/>
                    </div>
                </Link>
                <button className='navigation__close' onClick={onClose} type='button'/>
            </div>
        </section>
    )
}

export default Navigation;