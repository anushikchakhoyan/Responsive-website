import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FiHeadphones, FiSearch, FiDollarSign, FiCloud, AiOutlineSafety, AiFillSignal} from "react-icons/all";

import Tag from "./Tag";
import "./index.scss";

const SubHeader = () => (
    <Container fluid>
        <Row>
            <Col sm={12} xl={11} className="mx-auto py-3 tag-wrapper d-flex align-items-center">
                <Tag icon={FiHeadphones} text="Accounting & Financial Managment"/>
                <Tag icon={FiSearch} text="HR Managment"/>
                <Tag icon={FiDollarSign} text="Sales"/>
                <Tag icon={AiFillSignal} text="Enterprise Perfomance Managment"/>
                <Tag icon={AiOutlineSafety} text="Security"/>
                <Tag icon={FiCloud} text="Cloud & Sales"/>
            </Col>
            {/*<div className="opacity-layer"/>*/}
        </Row>
    </Container>
)


export default SubHeader;
