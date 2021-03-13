import React from "react";
import {map} from "lodash-es";
import {Link} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import {BsArrowRight, FiCheckCircle, FiUsers} from "react-icons/all";

import "./index.scss";

const ProductDetail = ({discount, attachment, title, features, isLimited, price, newPrice, desc, }) => (
    <Container className="product-detail">
        <Row>
            <Col xs={12} sm={12} md={6}>
                <div className="product-item">
                    {discount && (
                        <div className="discount">{discount}% off </div>
                    )}
                    <Image src={attachment} fluid alt={title}/>
                </div>
                <Col className="my-2 p-0">
                    <h2 className="py-3 list-item-title">Key features</h2>
                    {map(features, (item, index) => (
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
                    <p className="product-detail-title">{title}</p>
                    <p className="mb-0 product-detail-desc">{desc}</p>
                </div>
                <h3 className="list-item-title pt-5 pb-3">About this deal</h3>
                <div className="d-flex justify-content-between align-items-start">
                    <div className={`${isLimited ? 'limited' : "permanent"}`}>
                        <div className="time">{isLimited ? "Limited time deal" : "Permanent deal"}</div>
                        <p className="mb-0 save-money py-1">You save $20</p>
                    </div>
                    {!discount ? (
                        <span className="price">${price}</span>
                    ) : (
                        <div className="d-flex align-items-center"><span
                            className="price old">${price}</span><span
                            className="price new">${newPrice}</span></div>
                    )}
                </div>
                <p className="product-detail-desc">{desc}</p>
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
)

export default ProductDetail;
