import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PromoCard({imageUrl, textBody, linkText, linkUrl, orientation = ""}) {

    if (orientation === "horizontal") {
        return (
            <Card  className="card my-3 mx-auto">
                <Row>
                    <Col>
                        <Card.Img src={imageUrl} />
                    </Col>

                    <Col>
                    <Row>
                        <Card.Body>
                            <p className="card-text">
                                {textBody}
                            </p>
                            <Link className=""
                                to={linkUrl}>
                                {linkText}
                            </Link>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Link>Link</Link>
                    </Row>
                    </Col>
                </Row>
            </Card>
        );
    }
    

    return (
        <Card  className="card my-3 mx-auto">
                <Col>
                    <Row>
                        <Card.Img src={imageUrl} />
                    </Row>
                    <Row>
                        <Card.Body>
                            <p className="card-text">
                                {textBody}
                            </p>
                            <Link className=""
                                to={linkUrl}>
                                {linkText}
                            </Link>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Link>Link</Link>
                    </Row>
                </Col>
        </Card>
    );
}

export default PromoCard;