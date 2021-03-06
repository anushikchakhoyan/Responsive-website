import React from "react-icons";
import {Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/all";

const ProductsListHeader = ({to, title}) => (
    <Row className="align-items-center products-list px-3">
        {title && (
            <h2 className="title">{title}</h2>
        )}
        {to && (
            <Link to={to} className="link d-flex align-items-center">
                <BsArrowRight className="mr-2 link-icon"/>
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
