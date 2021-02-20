import React from "react";
import {Col, Row} from "react-bootstrap";
import {BiEnvelope, FiPhone} from "react-icons/all";

import ExternalLink from "../../ExternalLink";

const ContactUsInfo = () => {
    return (
        <Row className="justify-content-between align-items-center pt-3">
            <Col className="contact-info-item">
                <FiPhone/>
                <ExternalLink className="link" to="tel:+23408112364568">+234 081-1236-4568</ExternalLink>
            </Col>
            <Col className="contact-info-item">
                <BiEnvelope/>
                <ExternalLink className="link" to="mailto:hello@info.com.ng">hello@info.com.ng</ExternalLink>
            </Col>
        </Row>
    )
}

export default ContactUsInfo;
