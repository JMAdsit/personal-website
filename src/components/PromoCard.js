import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import LinkCheck from "./LinkCheck";
import TitleCheck from "./TitleCheck";

function PromoCard({title, imageUrl, textBody, linkText, linkUrl, horizontal = false, insertedClasses}) {

    if (horizontal === true) {
        return (
            <Card  className={"horizontalCard card my-3 m-auto " + insertedClasses}>
                <TitleCheck title={title} />

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
        <Card  className={"card my-3 mx-auto " + insertedClasses}>
                <TitleCheck title={title} />
                
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