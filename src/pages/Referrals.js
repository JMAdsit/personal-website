import React from "react";
import { Row, Col } from "react-bootstrap";
import TextCard from "../components/TextCard";
import referrals from "../content/ReferralText";

function Referrals () {

    return (
        <Row>
            <Col>
                <TextCard 
                    title={referrals.cmurray.title}
                    textBody={referrals.cmurray.text}
                    insertedClasses={"referral-card"}
                />
            </Col>
            <Col>
                <TextCard 
                    title={referrals.akrumsieg.title}
                    textBody={referrals.akrumsieg.text}
                    insertedClasses={"referral-card"}
                />
            </Col>
        </Row>
    );
}

export default Referrals;