import React from "react";
import {FiSearch} from "react-icons/all";
import {FormControl, InputGroup} from "react-bootstrap";

import "./index.scss";
const { Prepend, Append } = InputGroup;

const SearchWithFilter = () => (
    <InputGroup size="lg">
        <Prepend className="align-items-center prepend-input">
            <FiSearch className="search-icon"/>
        </Prepend>
        <FormControl type="text" className="custom-input" placeholder="Search"/>
        <Append className="append-input align-items-center">
            <div className="filter-item d-flex align-items-center">All</div>
            <div className="filter-item d-flex align-items-center selected">Software</div>
            <div className="filter-item d-flex align-items-center">Online Services</div>
        </Append>
    </InputGroup>
)

export default SearchWithFilter;
