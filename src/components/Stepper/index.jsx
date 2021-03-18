import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Stepper = ({step, content}) => {
    return (
        <div className="stepper-wrapper">
            <div className="step">
                <div className="v-stepper">
                    <div className="d-flex justify-content-center align-items-center step-circle">{step}</div>
                    <div className="step-line"/>
                </div>
                <div className="step-content" dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </div>
    )
}

Stepper.propTypes = {
    step: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
};

export default Stepper;
