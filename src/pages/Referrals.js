import React from "react";
import { Row, Col } from "react-bootstrap";
import TextCard from "../components/TextCard";
import referrals from "../content/ReferralText";

function Referrals () {

    return (
        <Row>
            <Col>
                <TextCard 
                    textBody={referrals.akrumsieg.text}
                />
            </Col>
            <Col>
                <TextCard 
                    textBody={referrals.cmurray.text}
                />
            </Col>
        </Row>
    );
}

export default Referrals;