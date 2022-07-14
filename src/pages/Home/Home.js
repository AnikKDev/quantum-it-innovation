import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Services from './Services/Services';
import Subscription from './Subscription/Subscription';
const Home = () => {
    return (
        <div>
            <Banner />
            <Experience />
            <Services />
            <Subscription />
        </div>
    );
};

export default Home;