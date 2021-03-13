import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";

import SearchWithFilter from "../../components/SearchWithFilter";
import ProductDetail from "../../components/Details";
import SubHeader from "../../components/SubHeader";


const ProductDetailsContainer = () => {
    const [details] = useState(
        {
            title: 'Adidas sport',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
            discount: 30,
            price: 99.9,
            newPrice: 50,
            isLimited: true,
            features: [
                {
                    title: "StrongPointer",
                    desc: "is a free online magazine featuring discount links. "
                },
                {
                    title: "Our mission",
                    desc: "is simple. We provide a trusted platform to the end-users."
                },
                {
                    title: "Our links",
                    desc: "are 100% verified and fresh, published by our content managers. "
                }
            ]
        }
    )

    return (
        <div className="bg-white">
            <Container fluid>
                <Row>
                    <Col sm={12} xl={11} className="mx-auto py-3 px-0">
                        <SearchWithFilter />
                    </Col>
                </Row>
            </Container>
            <SubHeader/>
            <section className="py-5">
                <ProductDetail {...details}/>
            </section>
        </div>
    )
}

export default ProductDetailsContainer;
