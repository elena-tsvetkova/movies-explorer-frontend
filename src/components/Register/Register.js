import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import '../information/information.css';
import { useForm} from 'react-hook-form';

function Register ({onSubmit, isErrorMessage}) {

    const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

    function submit (data) {
        onSubmit(data);
    }
    return (
        <section className='register information'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='register__title'>Добро пожаловать!</h1>

            <form className='information__form' onSubmit={handleSubmit(submit)}>
                <label className = 'information__form-label' htmlFor='name'> Имя </label>
                <input className='information__form-input' type='text' required name = 'name' id='name'  {...register('name', {required: true,
                            minLength: 2, maxLength: 30, pattern: /[a-zа-яё ]/i})}/>
                <span className='information__form-input-error'>{errors.name?.type === "required" && "Пожалуйста, заполните поле"}
                    {errors.name?.type === "pattern" && "Поле содержит недопустимые символы"}
                    {errors.name?.type === "minLength" && "Минимальное  значение должно быть не меньше 2-х символов"}
                    {errors.name?.type === "maxLength" && "Достигнута максимальная длина поля"}
                </span>

                <label className = 'information__form-label' htmlFor='email'> E-mail </label>
                <input className='information__form-input' type='email' required name = 'email' id='email'  {...register('email', {required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/})}/>
                <span className='information__form-input-error'> {errors.email?.type === "required" && "Пожалуйста, заполните поле"}
                    {errors.email?.type === "pattern" && "Поле содержит недопустимые символы"}
                </span>

                <label className = 'information__form-label' htmlFor='password'> Пароль </label>
                <input className='information__form-input' type='password' required name ='password' id='password' {...register('password', {required: true})}/>
                <span className='information__form-input-error'>{errors.password?.type === "required" && "Пожалуйста, заполните поле"} </span>

                <span className={'information__form-input-error' +  (isErrorMessage?'information__form-input-error ':'')}>Во время регистрации произошла ошибка</span>
                <button className={'information__button information__button-register' +  (!isValid?' form__button_disabled':'')} disabled={!isValid} type='submit'>Зарегистрироваться</button>

                </form>

            <p className="information__text">Уже зарегистрированы?
                <Link to='signin' className="information__link"> Войти</Link>
            </p>
        </section>
    )
}

export default Register;