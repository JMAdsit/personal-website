import React from "react";
import { Row, Col } from "react-bootstrap";
import referrals from "../content/ReferralText";
import PromoCard from "../components/PromoCard";
import talkyPic from "../assets/programming-languages-vector.jpg";

function Referrals () {

    return (
        <div className="content">
            <Row>
                <Col>
                    <PromoCard
                        imageUrl={talkyPic}
                        title={referrals.cmurray.title}
                        textBody={referrals.cmurray.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
                <Col>
                    <PromoCard
                        imageUrl={talkyPic}
                        title={referrals.akrumsieg.title}
                        textBody={referrals.akrumsieg.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Referrals;