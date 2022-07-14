import React from 'react';
import './Subscription.css';
import { Form, Button } from 'react-bootstrap';
const Subscription = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    };
    return (

        <div className="d-flex subscription-container justify-content-between align-items-center">
            <div className="text-white">
                <h3 className="fw-bold">Subscribe to Our Newsletter</h3>
                <p>Please provide your email to subscribe. Don't worry! We hate spam too.</p>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control style={{ width: '280px' }} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <button className="click-btn" type="submit">
                        Subscribe
                    </button>
                </Form>
            </div>
        </div>

    );
};

export default Subscription;