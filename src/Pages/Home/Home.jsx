import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Skills from '../../Components/Skills/Skills';
import MyWork from '../../Components/MyWork/MyWork';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <MyWork></MyWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;