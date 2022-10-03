import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio.js';


function Main () {

    return (
        <main>

            <Promo/>

            <AboutProject />

            <Techs />

            {/*<AboutMe />*/}

            {/*<Portfolio />*/}

        </main>
    );
}

export default Main;