import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({to, children, ...rest}) => (
    <a href={to} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
    </a>
)

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExternalLink;
