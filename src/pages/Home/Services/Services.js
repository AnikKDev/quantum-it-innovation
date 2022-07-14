import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { TbSpeakerphone } from 'react-icons/tb';
import { AiOutlineBank } from 'react-icons/ai';
import './Services.css';
const Services = () => {
    return (
        <div className="my-5">
            <div className="text-center">
                <h3>Our Services</h3>
                <p>
                    We have experties on the similar field we are working to. And we are commited to provide best service possible to our client
                </p>
            </div>
            <div className="row gx-0 gy-5 my-4">
                <div className="col-md-4 text-center border border-secondary d-flex justify-content-center">
                    <Card className="border border-primary pt-5 pb-2 position-relative" style={{ width: '18rem' }}>
                        <AiOutlineMoneyCollect className="position-absolute top-0 start-50 translate-middle service-icon"></AiOutlineMoneyCollect>
                        <Card.Body>
                            <Card.Title>Financial Consulting</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 text-center border border-secondary d-flex justify-content-center">
                    <Card className="border border-primary pt-5 pb-2 position-relative" style={{ width: '18rem' }}>
                        <TbSpeakerphone className="position-absolute top-0 start-50 translate-middle service-icon"></TbSpeakerphone>
                        <Card.Body>
                            <Card.Title>Content Marketing</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 text-center border border-secondary d-flex justify-content-center">
                    <Card className="border border-primary pt-5 pb-2 position-relative" style={{ width: '18rem' }}>
                        <AiOutlineBank className="position-absolute top-0 start-50 translate-middle service-icon"></AiOutlineBank>
                        <Card.Body>
                            <Card.Title>Finance Marketing</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Services;