import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Image, Row} from "react-bootstrap";

import './index.scss';

const TwoColumnLayout = ({title, attachment, children}) => (
    <Container fluid>
        <Row className="two-column-layout py-5 align-items-center">
            <Col xs={8} md={5} lg={3}>
                <Image src={attachment} fluid />
            </Col>
            <Col xs={12} md={5} className="d-flex justify-content-center">
                <div className="two-column-layout-content">
                    <h2 className="two-column-layout-content-title">{title}</h2>
                    {children}
                </div>
            </Col>
        </Row>
    </Container>
)

TwoColumnLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    attachment: PropTypes.string.isRequired
};

export default TwoColumnLayout;
