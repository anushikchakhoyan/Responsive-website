import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/all";
import {Button, Col, Image} from "react-bootstrap";

const FavoriteIcon = ({isFavorite}) => (
    <div className="favorite-icon cursor-pointer">
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="37" height="37" rx="9" fill={`${isFavorite ? '#FF324B' : '#fff'}`}/>
            <path
                d="M28.3036 10.6797C27.766 10.1472 27.1278 9.72477 26.4253 9.43656C25.7228 9.14834 24.9699 9 24.2095 9C23.4491 9 22.6961 9.14834 21.9936 9.43656C21.2912 9.72477 20.6529 10.1472 20.1153 10.6797L18.9997 11.7844L17.8841 10.6797C16.7983 9.60458 15.3256 9.00056 13.79 9.00056C12.2544 9.00056 10.7817 9.60458 9.69584 10.6797C8.61001 11.7549 8 13.2131 8 14.7336C8 16.2541 8.61001 17.7124 9.69584 18.7875L10.8115 19.8922L18.9997 28L27.188 19.8922L28.3036 18.7875C28.8414 18.2553 29.268 17.6233 29.5591 16.9277C29.8502 16.2321 30 15.4866 30 14.7336C30 13.9807 29.8502 13.2352 29.5591 12.5396C29.268 11.844 28.8414 11.212 28.3036 10.6797Z"
                fill={`${isFavorite ? '#fff' : '#FF324B'}`}/>
        </svg>
    </div>
)

const ProductItem = ({id, price, newPrice, title, desc, discount, isFavorite, isLimited, attachment}) => (

    <Col xs={12} md={6} xl={4} className="product-wrapper my-2">
        <div className="product-item">
            {discount && (
                <div className="discount">{discount}% off </div>
            )}
            <FavoriteIcon isFavorite={isFavorite}/>
            <Image src={attachment} fluid alt={title}/>
            <div className="info-wrapper">
                <Link to={`/products/${id}`} className="title">
                    <p className="mb-0">{title}</p>
                </Link>
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
        <Button variant="light"
                className="check-btn d-flex justify-content-center align-items-center"><FiShoppingBag
            className="mr-1"/>Check Now</Button>
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
