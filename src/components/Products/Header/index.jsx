import React from "react-icons";
import {Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {CgArrowLongRight} from "react-icons/all";

const ProductsListHeader = ({to, title}) => (
    <Row className="align-items-center products-list px-3">
        {title && (
            <h2 className="title">{title}</h2>
        )}
        {to && (
            <Link to={to} className="link">
                <CgArrowLongRight className="mr-2"/>
                <span>View all</span>
            </Link>
        )}
    </Row>
)

ProductsListHeader.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
}

export default ProductsListHeader;
