import { Row, Col } from "react-bootstrap";
import referrals from "../content/ReferralText";
import PromoCard from "../components/PromoCard";

function Referrals () {

    return (
        <div className="content">
            <Row>
                <Col>
                    <PromoCard
                        title={referrals.cmurray.title}
                        textBody={referrals.cmurray.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
                <Col>
                    <PromoCard
                        title={referrals.akrumsieg.title}
                        textBody={referrals.akrumsieg.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PromoCard 
                        title={referrals.bnichols.title}
                        textBody={referrals.bnichols.text}
                    />
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    );
}

export default Referrals;