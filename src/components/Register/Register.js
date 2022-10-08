import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import '../information/information.css'

function Register () {
    return (
        <section className='register information'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='register__title'>Добро пожаловать!</h1>

            <form className='information__form'>
                <label className = 'information__form-label' id='name'> Имя </label>
                <input className='information__form-input' type='text' required name = 'name' id='name' minLength='2' maxLength='30'/>
                <span className='information__form-input-error'>Что-то пошло не так...</span>

                <label className = 'information__form-label' id='email'> E-mail </label>
                <input className='information__form-input' type='email' required name = 'email' id='email'/>
                <span className='information__form-input-error'>Что-то пошло не так...</span>


                <label className = 'information__form-label' id='password'> Пароль </label>
                <input className='information__form-input' type='password' required name = 'password' id='password'/>
                <span className='information__form-input-error'>Что-то пошло не так...</span>

                </form>

                <button className='information__button' type='submit'>Зарегистрироваться</button>


            <p className="information__text">Уже зарегистрированы?
                <Link to='signin' className="information__link"> Войти</Link>
            </p>
        </section>
    )
}

export default Register;