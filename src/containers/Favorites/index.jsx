import React from "react";
import {Container, Row} from "react-bootstrap";

import FavoritesHeader from "../../components/Favorites/Header";
import Products from "../../components/Products";

const Favorites = () => (
    <>
        <FavoritesHeader/>
        <section className="bg-white py-5">
            <Container>
                <Row className="products-list">
                    <h2 className="title px-3">Links you have saved</h2>
                </Row>
                <Products />
            </Container>
        </section>
    </>
)

export default Favorites;
