import React from "react";
import PropTypes from "prop-types";
import {Button, Col, Image} from "react-bootstrap";
import {FiShoppingBag, GrFavorite} from "react-icons/all";

const ProductItem = ({price, newPrice, title, desc, discount, isFavorite, isLimited, attachment}) => (
    <Col xs={12} md={6} xl={4} className="product-wrapper my-2">
        <div className="product-item">
            {discount && (
                <div className="discount">{discount}% off </div>
            )}
            <div className={`favorite-icon cursor-pointer ${isFavorite ? 'red' : ''}`}><GrFavorite/></div>
            <Image src={attachment} fluid alt={title}/>
            <div className="info-wrapper">
                <p className="title">{title}</p>
                <p className="mb-0 desc">{desc}</p>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-start pt-3">
            <div className={`${isLimited ? 'limited' : "permanent"}`}>
                <div className="time">{isLimited ? "Limited time deal" : "Permanent deal"}</div>
                <p className="mb-0 save-money py-1">You save $20</p>
            </div>
            {!discount ? (
                <span className="price">${price}</span>
            ) : (
                <div className="d-flex align-items-center"><span className="price old">${price}</span><span
                    className="price new">${newPrice}</span></div>
            )}
        </div>
        <Button variant="light" className="check-btn"><FiShoppingBag className="mr-1"/>Check Now</Button>
    </Col>
)

ProductItem.propTypes = {
    desc: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    isLimited: PropTypes.bool,
    discount: PropTypes.number,
    isFavorite: PropTypes.bool,
    newPrice: PropTypes.number,
    attachment: PropTypes.string
};

export default ProductItem;
