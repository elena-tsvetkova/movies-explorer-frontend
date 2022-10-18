import React, {useContext} from 'react';
import './Profile.css';
import {useForm} from 'react-hook-form';
import {UserContext} from '../../UserContext/UserContext.js'


function Profile(props) {
    const {register, formState: {errors, isValid}, handleSubmit} = useForm({mode: 'onChange'});
    const user = useContext(UserContext);

    function submit(data) {
        if (data.name !== user.name || data.email !== user.email) {
            props.onUpdateUser({
                name: data.name,
                email: data.email,
            });
        } else {
            return !isValid
        }
    }

    return (
        <section className="profile">

            <div className='profile__content'>
                <h1 className='profile__title'> Привет, {user.name}!</h1>

                <form className='profile__form' onSubmit={handleSubmit(submit)}>
                    <div className='profile__form-container'>
                        <label className='profile__form-label' htmlFor='name'>Имя</label>
                        <input className='profile__form-input' name='name' type='text'
                               id='name' {...register('name', {
                            required: true,
                            minLength: 2,
                            maxLength: 30,
                            value: user.name,
                            pattern: /[a-zа-яё ]/i
                        })}/>
                    </div>
                    <span
                        className='profile__form-input-text'>{errors.name?.type === "required" && "Пожалуйста, заполните поле"}
                        {errors.name?.type === "pattern" && "Поле содержит недопустимые символы"}
                        {errors.name?.type === "minLength" && "Минимальное  значение должно быть не меньше 2-х символов"}
                        {errors.name?.type === "maxLength" && "Достигнута максимальная длина поля"}</span>

                    <hr className='profile__border'/>
                    <div className='profile__form-container'>
                        <label className='profile__form-label' htmlFor='email'>E-mail</label>
                        <input className='profile__form-input' name='email' type='email'
                               id='email'  {...register('email', {
                            required: true,
                            value: user.email,
                            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/
                        })}/>
                    </div>
                    <span
                        className='profile__form-input-text'> {errors.email?.type === "required" && "Пожалуйста, заполните поле"}
                        {errors.email?.type === "pattern" && "Поле содержит недопустимые символы"}</span>

                    <button disabled={!isValid}
                            className={'profile__form-button' + (!isValid ? ' profile__form-button_disabled' : '')}
                            type='submit'>Редактировать
                    </button>

                </form>

                <button className='profile__exit' type='button' onClick={() => props.onLogAut()}>Выйти из аккаунта
                </button>
            </div>
        </section>
    );
}

export default Profile;