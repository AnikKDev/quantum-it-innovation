import React from 'react';
import './Experience.css';
import experienceImg from '../../../images/coding.png';
import { MdOutlineConstruction } from 'react-icons/md';
import { AiOutlineAntCloud } from 'react-icons/ai';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdContactSupport } from 'react-icons/md';
// <FaBeer />
const Experience = () => {
    return (
        <div className='container home-container mb-5'>
            <div className="row gx-0 align-items-center">
                <div className="col-md-8 home-heading pe-5">
                    <h3>We have many years of experiences in Consultant Business</h3>
                    <p className='text-muted pe-4'>We are providing the best service possible since the beginning of our journey. We have faced many obstacles but never we stopped. We provided what we commited to our clients. We are still providing what we are committed to.</p>
                    <button className="btn btn-primary">Know More</button>
                </div>
                <div className="col-md-4 home-img">
                    <img className='img-fluid' src={experienceImg} alt="" />
                </div>
            </div>
            <div className="row my-5 gy-5">
                <div className="col-md-3 flex-column d-flex justify-content-center align-items-center">
                    <MdOutlineConstruction className="exp-icon" />
                    <h4>Commit<span style={{ color: '#AEAEAE' }}>ment</span></h4>
                </div>
                <div className="col-md-3 flex-column d-flex justify-content-center align-items-center">
                    <AiOutlineAntCloud className="exp-icon" />
                    <h4>Cloud <span style={{ color: '#AEAEAE' }}>Service</span></h4>
                </div>
                <div className="col-md-3 flex-column d-flex justify-content-center align-items-center">
                    <RiCustomerServiceFill className="exp-icon" />
                    <h4>24/7 <span style={{ color: '#AEAEAE' }}>Service</span></h4>
                </div>
                <div className="col-md-3 flex-column d-flex justify-content-center align-items-center">
                    <MdContactSupport className="exp-icon" />
                    <h4>Lifetime <span style={{ color: '#AEAEAE' }}>Support</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Experience;