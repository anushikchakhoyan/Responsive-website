import React from "react";
import {FiSearch} from "react-icons/all";
import {InputGroup} from "react-bootstrap";

import "./index.scss";
const { Prepend } = InputGroup;

const GlobalSearch = () => (
    <InputGroup className="ml-5 mr-3 search-wrapper">
        <Prepend className="align-items-center">
            <FiSearch className="search-icon text-white"/>
        </Prepend>
        <input type="text" className="custom-input" placeholder="Search"/>
    </InputGroup>
)

export default GlobalSearch;
