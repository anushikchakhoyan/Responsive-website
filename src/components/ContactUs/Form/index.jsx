import React from "react";
import {Form} from "react-bootstrap";

import ContactUsInfo from "../Info";
import "../index.scss";

const {Group,Control,Label} = Form;

const ContactUsForm = () => {
    return (
        <Form className="contact-form">
            <Group controlId="formGroupName">
                <Label className="contact-form-label">Full Name:</Label>
                <Control size="lg" className="contact-form-input" type="text" placeholder="John Doe" />
            </Group>
            <Group controlId="formGroupEmail">
                <Label className="contact-form-label">Email Address:</Label>
                <Control size="lg" className="contact-form-input" type="email" placeholder="johndoe@gmail.com" />
            </Group>
            <Group controlId="formGroupMessage">
                <Label className="contact-form-label">Message</Label>
                <Control as="textarea" className="contact-form-textarea" rows={6} placeholder="Your Message"/>
            </Group>
            <button className="font-weight-bold app-orange-button">Send</button>
            <ContactUsInfo />
        </Form>
    )
}

export default ContactUsForm;
