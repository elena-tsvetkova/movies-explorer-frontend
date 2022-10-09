import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <section className="profile">

            <div className='profile__content'>
                <h1 className='profile__title'> Привет, {props.name}!</h1>

                <form className='profile__form'>
                    <div className='profile__form-conteyner'>
                        <label className='profile__form-label' id='name'>Имя</label>
                        <input className='profile__form-input' name='name' type='text' id='name' required
                               value={props.name}/>
                    </div>
                    <span className='profile__form-input-text'>Что-то пошло не так...</span>

                    <hr className='profile__border'/>
                    <div className='profile__form-conteyner'>
                        <label className='profile__form-label' id='email'>E-mail</label>
                        <input className='profile__form-input' name='email' type='email' id='email' required
                               value={props.email}/>
                    </div>
                    <span className='profile__form-input-text'>Что-то пошло не так...</span>

                    <button className='profile__form-button' type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit' type='submit'>Выйти из аккаунта</button>
            </div>
        </section>
    );
}

export default Profile;