import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import LinkCheck from "./LinkCheck";

function PromoCard({imageUrl, textBody, linkText, linkUrl, orientation = "", insertedClasses}) {

    if (orientation === "horizontal") {
        return (
            <Card  className={"horizontalCard card my-3 m-auto " + insertedClasses}>
                <Row>
                    <Col>
                        <Card.Img src={imageUrl} />
                    </Col>
                    <Col className="promoTextandLinkFrame">
                        <Row>
                            <Card.Body>
                                <p className="card-text">
                                    {textBody}
                                </p>
                            </Card.Body>
                        </Row>
                        <LinkCheck 
                            linkText={linkText} 
                            linkUrl={linkUrl} 
                        />
                    </Col>
                </Row>
            </Card>
        );
    }

    return (
        <Card  className={"card my-3 mx-auto" + insertedClasses}>
                <Col>
                    <Row>
                        <Card.Img src={imageUrl} />
                    </Row>
                    <Row>
                        <Card.Body>
                            <p className="card-text">
                                {textBody}
                            </p>
                        </Card.Body>
                    </Row>
                    <LinkCheck 
                        linkText={linkText} 
                        linkUrl={linkUrl} 
                    />
                </Col>
        </Card>
    );
}

export default PromoCard;