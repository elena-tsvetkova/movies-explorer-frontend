import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register () {
    return (
        <section className='register'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='register__title'>Добро пожаловать!</h1>

            <form className='register__form'>
                <label className = 'register__form-label' id='name'> Имя </label>
                <input className='register__form-input' type='text' required name = 'name' id='name' minLength='2' maxLength='30'/>
                <span className='register__form-input-error'>Что-то пошло не так...</span>

                <label className = 'register__form-label' id='email'> E-mail </label>
                <input className='register__form-input' type='email' required name = 'email' id='email'/>
                <span className='register__form-input-error'>Что-то пошло не так...</span>


                <label className = 'register__form-label' id='password'> Пароль </label>
                <input className='register__form-input' type='password' required name = 'password' id='password'/>
                <span className='register__form-input-error'>Что-то пошло не так...</span>

                </form>

                <button className='register__button' type='submit'>Зарегистрироваться</button>


            <p className="register__text">Уже зарегистрированы?
                <Link to='signin' className="register__link"> Войти</Link>
            </p>
        </section>
    )
}

export default Register;