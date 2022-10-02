import React from 'react';
import './AboutProject.css';

function AboutProject () {
    return (
        <section className="aboutProject" id = 'aboutProject'>
            <h3 className='aboutProject__title'>O проекте</h3>
            <hr className="aboutProject__border"></hr>
            <div className="aboutProject__text">
                <div className="aboutProject__text-time">
                    <h4 className="aboutProject__text-time_title">Дипломный проект включал 5 этапов</h4>
                    <p className="aboutProject__text-time_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__text-time">
                    <h4 className="aboutProject__text-time_title">На выполнение диплома ушло 5 недель</h4>
                    <p className="aboutProject__text-time_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="aboutProject__timeBar">
                <div className="aboutProject__timeBar-backend-color">
                    <p className = "aboutProject__timeBar-backend_text">1 неделя</p>
                </div>
                <div className="aboutProject__timeBar-frontend-color">
                    <p className = "aboutProject__timeBar-frontend_text ">4 недели</p>
                </div>
                <div className="aboutProject__timeBar-backend">
                    <p className = "aboutProject__timeBar-backend_text">Back-end</p>
                </div>
                <div className="aboutProject__timeBar-frontend">
                    <p className = "aboutProject__timeBar-frontend_text">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;