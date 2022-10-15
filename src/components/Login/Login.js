import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';
import { useForm} from 'react-hook-form';

function Login ({onSubmit}) {
     const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

    function submit (data) {
        onSubmit(data);
    }
    return (
        <section className='login information'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='login__title'>Рады видеть!</h1>

            <form className='information__form' onSubmit={handleSubmit(submit)}>

                <label className = 'information__form-label' htmlFor='email'> E-mail </label>
                <input className='information__form-input' type='email' required name = 'email' id='email' {...register('email', {required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/})}/>
                <span className='information__form-input-error'>{errors.email?.type === "required" && "Пожалуйста, заполните поле"}
                    {errors.email?.type === "pattern" && "Поле содержит недопустимые символы"}</span>


                <label className = 'information__form-label' htmlFor='password'> Пароль </label>
                <input className='information__form-input' type='password' required name = 'password' id='password'  {...register('password', {required: true})}/>
                <span className='information__form-input-error'>{errors.password?.type === "required" && "Пожалуйста, заполните поле"}</span>

            </form>
                            <button className={'information__button login__button' +  (!isValid?' form__button_disabled':'')} disabled={!isValid} type='submit'>Войти</button>


            <p className="information__text">Ещё не зарегистрированы?
                <Link to='signup' className="information__link">Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;