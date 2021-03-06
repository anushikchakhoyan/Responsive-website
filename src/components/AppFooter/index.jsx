import React from "react";
import {Col, Row, Image, Container} from "react-bootstrap";

import SocialIcons from "../SocialIcons";

import footerImage from "../../assets/footer.png";
import Logo from "../../assets/logo.svg";
import Nav from "./Nav";
import "./index.scss";

const AppFooter = () => {
    return (
        <footer>
            <Container fluid className="px-0">
                <Row className="justify-content-between">
                    <Col sm={12} md={7} xl={5} className="pt-4">
                        <Image src={Logo} fluid alt="Fatlinker logo"/>
                        <Nav />
                        <div className="d-flex justify-content-between align-items-center py-3 social-icons">
                            <p className="mb-0">Strong point ©2021</p>
                            <SocialIcons />
                        </div>
                    </Col>
                    <Col xs={6} sm={4} lg={5} className="d-flex justify-content-end align-items-center image-wrapper">
                        <Image src={footerImage} fluid alt="Fatlinker footer image"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default AppFooter;
