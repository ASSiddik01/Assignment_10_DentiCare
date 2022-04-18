import React from 'react';
import Appionment from '../Appionment/Appionment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* This page contain the all section page */}
            <Banner />
            <Services />
            <Appionment/>
        </div>
    );
};

export default Home;