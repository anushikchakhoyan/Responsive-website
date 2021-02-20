import React from "react";
import {Link} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import {CgArrowLongRight} from "react-icons/all";

import Products from "../../components/Products";
import Hero from "../../components/Hero";
import "./index.scss";

const Home = () => (
    <>
        <Hero/>
        <section className="bg-white py-5">
            <Container>
                <Row className="align-items-center products-list">
                    <h2 className="title px-3">Recently viewed & more </h2>
                    <Link to="#viewMore" className="link">
                        <CgArrowLongRight className="mr-2"/>
                        <span>View all</span>
                    </Link>
                </Row>
                <Products />
            </Container>
        </section>
    </>
)

export default Home;
