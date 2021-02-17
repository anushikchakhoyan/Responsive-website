import React from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import './index.scss';

const ScrollDown = () => (
    <Row className="flex-column align-items-center scroll-down">
        <Link to="/#next">
            <div className="mouse">
                <span className="line"/>
            </div>
        </Link>
        <p className="scroll-down-text">scroll down</p>
    </Row>
);

export default ScrollDown;
