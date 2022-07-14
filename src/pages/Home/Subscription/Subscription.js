import React from 'react';
import './Subscription.css';
import { Form, Button } from 'react-bootstrap';
const Subscription = () => {
    return (

        <div className="d-flex justify-content-between">
            <div>
                <h3>Subscript Our Newsletter</h3>
                <p>Please provide your email to subscript. Don't worry ! We hate spam too.</p>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default Subscription;