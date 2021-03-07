import React, {useState} from "react";
import {map} from "lodash-es";
import {Container, Row, Col, Image} from "react-bootstrap";
import {BsArrowRight, FiCheckCircle, FiUsers} from "react-icons/all";

import "./index.scss";
import {Link} from "react-router-dom";

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
        <section className="bg-white py-5 product-detail">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="product-item">
                            {details.discount && (
                                <div className="discount">{details.discount}% off </div>
                            )}
                            <Image src={details.attachment} fluid alt={details.title}/>
                        </div>
                        <Col className="my-2 p-0">
                            <h2 className="py-3 list-item-title">Key features</h2>
                            {map(details.features, (item, index) => (
                                <div className="d-flex list-item" key={index}>
                                    <div className="list-item-icon mr-2">
                                        <FiCheckCircle/>
                                    </div>
                                    <p><strong className="mr-1">{item.title}</strong> {item.desc}</p>
                                </div>
                            ))}
                        </Col>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <div>
                            <p className="product-detail-title">{details.title}</p>
                            <p className="mb-0 product-detail-desc">{details.desc}</p>
                        </div>
                        <h3 className="list-item-title pt-5 pb-3">About this deal</h3>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className={`${details.isLimited ? 'limited' : "permanent"}`}>
                                <div className="time">{details.isLimited ? "Limited time deal" : "Permanent deal"}</div>
                                <p className="mb-0 save-money py-1">You save $20</p>
                            </div>
                            {!details.discount ? (
                                <span className="price">${details.price}</span>
                            ) : (
                                <div className="d-flex align-items-center"><span
                                    className="price old">${details.price}</span><span
                                    className="price new">${details.newPrice}</span></div>
                            )}
                        </div>
                        <p className="product-detail-desc">{details.desc}</p>
                        <h3 className="list-item-title pt-5 pb-3">How to use this deal</h3>
                        <>
                            <div className="stepper">
                                <div className="d-flex align-items-center">
                                    <p className="stepper-number d-flex justify-content-center align-items-center mb-0">01
                                    </p>
                                    <p className="mb-0 ml-3 stepper-text">zdsxfgcjfcj</p>
                                </div>
                                <div className="stepper-line"/>
                            </div>
                            <div className="stepper">
                                <div className="d-flex align-items-center">
                                    <p className="stepper-number d-flex justify-content-center align-items-center mb-0">02
                                    </p>
                                    <p className="mb-0 ml-3 stepper-text">zdsxfgcjfcj</p>
                                </div>
                                <div className="stepper-line"/>
                            </div>
                            <div className="stepper">
                                <div className="d-flex align-items-center">
                                    <p className="stepper-number d-flex justify-content-center align-items-center mb-0">03
                                    </p>
                                    <p className="mb-0 ml-3 stepper-text">zdsxfgcjfcj</p>
                                </div>
                            </div>
                        </>

                        <div className="notification p-4 my-4 d-flex align-items-center">
                            <div className="d-flex align-items-start">
                                <FiUsers className="users-icon"/>
                                <p className="notification-text mb-0">7 customers have successfully enrolled this deal</p>
                            </div>
                            <Link to="/" className="d-flex align-items-center notification-button">
                                <BsArrowRight className="mr-1 link-icon"/>
                                <span>Enroll Now</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductDetailsContainer;
