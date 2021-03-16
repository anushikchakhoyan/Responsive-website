import React from "react";
import {Container} from "react-bootstrap";

import FavoritesHeader from "../../components/Favorites/Header";
import ProductsListHeader from "../../components/Products/Header";
import Products from "../../components/Products";
import SubHeader from "../../components/SubHeader";

const Favorites = () => (
    <>
        <SubHeader/>
        <FavoritesHeader/>
        <section className="bg-white py-5">
            <Container>
                <ProductsListHeader title="Links you have saved"/>
            </Container>
            <Products/>
        </section>
    </>
)

export default Favorites;
