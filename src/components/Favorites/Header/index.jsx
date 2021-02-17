import React from "react";
import {Col, Image, Row, Container} from "react-bootstrap";

import FavoritesImage from "../../../assets/favorites.png";
import "./index.scss";

const FavoritesHeader = () => (
    <Container>
        <Row className="align-items-center justify-content-end py-5 favorites">
            <h1 className="favorites-title">My favorite products</h1>
            <Col sm={10} md={6} lg={7}><Image src={FavoritesImage} fluid/></Col>
        </Row>
    </Container>
)

export default FavoritesHeader;
