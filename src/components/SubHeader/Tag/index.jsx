import React from "react";
import PropTypes from "prop-types";

const Tag = ({text, icon}) => {
    const ReactIcon = icon;
    return (
        <button className="tag d-flex align-items-center">
            <ReactIcon />
            <span className="pl-2">{text}</span>
        </button>
    )
}

Tag.propTypes = {
    icon: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Tag;
