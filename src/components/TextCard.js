import React from "react";
import LinkCheck from "./LinkCheck";
import { Col, Row } from "react-bootstrap";

function IsTitleCard({title}) {
    if (!title) {return null;}
    
    return (
    <div className="card-header">
        <h2 className="card-title text-center">
            {title}
        </h2>
    </div>);
}

function TextCard({title, textBody, linkText, linkUrl, insertedClasses}) {

    return (
    <div className={"card my-3 " + insertedClasses}>
        
        <IsTitleCard title={title} />

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