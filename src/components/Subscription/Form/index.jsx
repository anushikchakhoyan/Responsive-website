import React from "react";
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./index.scss";

const {Group,Control,Label} = Form;

const SubscriptionForm = () => {
    return (
        <div className="subscription-form">
            <h2 className="subscription-form-title">Subscribe to our newsletter</h2>
            <Form>
                <Group controlId="formGroupName">
                    <Label className="subscription-form-label">Full Name:</Label>
                    <Control size="lg" className="subscription-form-input" type="text" placeholder="John Doe" />
                </Group>
                <Group controlId="formGroupEmail">
                    <Label className="subscription-form-label">Email Address:</Label>
                    <Control size="lg" className="subscription-form-input" type="email" placeholder="johndoe@gmail.com" />
                </Group>
                <p>
                    By subscribing, you agree to our
                    <Link to="/conditions-of-use" className="px-1 legal-link">
                        Conditions of Use
                    </Link>
                    and
                    <Link to="/privacy-notice" className="px-1 legal-link">
                        Privacy Notice.
                    </Link>
                </p>
                <button className="font-weight-bold app-orange-button">Subscribe</button>
            </Form>
        </div>
    )
}

export default SubscriptionForm;
