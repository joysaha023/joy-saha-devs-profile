import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Skills from '../../Components/Skills/Skills';
import MyWork from '../../Components/MyWork/MyWork';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <MyWork></MyWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;