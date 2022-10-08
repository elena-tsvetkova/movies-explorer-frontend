import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login () {
    return (
        <section className='login information'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='login__title'>Рады видеть!</h1>

            <form className='information__form'>

                <label className = 'information__form-label' id='email'> E-mail </label>
                <input className='information__form-input' type='email' required name = 'email' id='email' minLength='3'/>
                <span className='information__form-input-error'>Что-то пошло не так...</span>


                <label className = 'information__form-abel' id='password'> Пароль </label>
                <input className='information__form-input' type='password' required name = 'password' id='password' minLength='4'/>
                <span className='information__form-input-error'>Что-то пошло не так...</span>

            </form>
                            <button className='information__button login__button' type='submit'>Войти</button>


            <p className="information__text">Ещё не зарегистрированы?
                <Link to='signup' className="information__link">Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;