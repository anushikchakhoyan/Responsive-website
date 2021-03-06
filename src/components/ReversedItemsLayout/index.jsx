import React from "react";
import {map} from "lodash-es";
import {FiCheckCircle} from "react-icons/all";
import {Col, Image, Row} from "react-bootstrap";

const ReversedItemsLayout = ({attachment, title, items}) => (
    <Row className="py-4 px-0 justify-content-between align-items-center about-wrapper">
        <Col xs={12} md={6} xl={7} className="my-2 header-wrapper">
            <h2>{title}</h2>
            {map(items, (item, index) => (
                <div className="d-flex list-item" key={index}>
                    <div className="list-item-icon mr-2">
                        <FiCheckCircle/>
                    </div>
                    <p><strong className="mr-1">{item.title}</strong> {item.desc}</p>
                </div>
            ))}
        </Col>
        <Col xs={8} sm={6} md={5} lg={4} className="mx-auto">
            <Image src={attachment} fluid/>
        </Col>
    </Row>
)

export default ReversedItemsLayout;
