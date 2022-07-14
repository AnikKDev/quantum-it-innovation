import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Banner.css';

import bannerImg from '../../../images/person-4.png';
const Home = () => {

    return (
        <div className='container home-container mb-5'>
            <div className="row gx-0 align-items-center">
                <div className="col-md-8 home-heading pe-5">
                    <h4>The Best You Can Ask For</h4>
                    <h1>We are consulting your business finances</h1>
                    <p className='text-muted pe-4'>Here, we are providing the best solution for consulting the business of yours. And we got the experts 24/7</p>
                    <button className="btn btn-primary">Start Now</button>
                </div>
                <div className="col-md-4 home-img">
                    <img className='img-fluid' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;