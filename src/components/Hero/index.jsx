import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

import SubscriptionForm from "../Subscription/Form";
import HeroImage from "../../assets/hero.png";
import './index.scss';

const Hero = () => (
    <Container fluid>
        <Row className="p-xl-5 p-sm-0 align-items-center justify-content-between mx-auto hero-layout">
                <Col xs={12} md={6} lg={5} className="d-flex justify-content-center p-0">
                    <div className="hero-layout-content">
                        <>
                            <h1 className="hero-layout-content-title">Get new <span className="text-purple">deals instantly!</span></h1>
                            <p className="hero-layout-content-desc">
                                StrongPointer is a free online magazine featuring discount links. You can use our links to
                                save money on buying your favorite software, online services and more.
                            </p>
                        </>
                        <div className="subscribe-in-hero">
                            <h2>Subscribe to our newsletter</h2>
                            <SubscriptionForm/>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={5} lg={5} className="hero-layout-image-wrapper">
                    <Image src={HeroImage} fluid/>
                </Col>
        </Row>
    </Container>
)

export default Hero;
