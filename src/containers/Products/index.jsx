import React from "react";
import {Container} from "react-bootstrap";

import ProductsListHeader from "../../components/Products/Header";
import Products from "../../components/Products";

const ProductsContainer = () => (
    <>
        <section className="bg-white py-5">
            <Container>
                <ProductsListHeader />
                <Products />
            </Container>
        </section>
    </>
)

export default ProductsContainer;
