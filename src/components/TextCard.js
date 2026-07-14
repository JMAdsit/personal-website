import React from "react";
import LinkCheck from "./LinkCheck";
import { Col, Row } from "react-bootstrap";
import TitleCheck from "./TitleCheck";

function TextCard({title, textBody, linkText, linkUrl, insertedClasses}) {

    return (
    <div className={"card my-3 " + insertedClasses}>
        
        <TitleCheck title={title} />

        <Col className="card-body">
            <Row>
                <p className="card-text">
                    {textBody}
                </p>
            </Row>
            <LinkCheck 
                linkText={linkText}
                linkUrl={linkUrl}
            />
        </Col>
    </div>);
}

export default TextCard;