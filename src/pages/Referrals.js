import React from "react";
import { Row, Col } from "react-bootstrap";
import TextCard from "../components/TextCard";

function Referrals () {

    return (
        <Row>
            <Col>
                <TextCard 
                    textBody={"Aaron Referral"}
                />
            </Col>
            <Col>
                <TextCard 
                    textBody={"Christian Referral"}
                />
            </Col>
        </Row>
    );
}

export default Referrals;