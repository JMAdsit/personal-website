import React from "react";
import { Row, Col } from "react-bootstrap";
import PromoCard from "../components/PromoCard";
import MainCardPic from "../assets/programming-language-on-screen.png";
import ReferralPic from "../assets/employee-directory-vector.png";
import EmailMe from "../assets/envelope-and-pen-vectorportal.png";
// import Spheal from "../assets/Spheal.gif";

let promoText = 
`Full-stack developer and software engineer with experience in \
automated testing and regression test monitoring.`;
let referralText = "See testimonials from people I've worked with.";
// let projectText = "";
let contactText = "Reach out about a project or position.";

function Home() {
    
    return (
        <div className="content">            
            <PromoCard 
                imageUrl={MainCardPic} 
                textBody={promoText} 
                linkText={"About Me"}
                linkUrl={"/about"}
                insertedClasses={"mainPageSplashCard"}
                horizontal={true}
            />

            <Row className="cardRow">
                {/* <Col>                        
                    <PromoCard 
                        imageUrl={Spheal} 
                        textBody={"Blurb about projects"}
                        linkText={"Projects"} 
                        linkUrl={"/projects"}
                        insertedClasses={"mainPageSubCards"}
                    />
                </Col> */}
                <Col>
                    <PromoCard 
                        imageUrl={ReferralPic} 
                        textBody={referralText}
                        linkText={"Referrals"} 
                        linkUrl={"/Referrals"}
                        insertedClasses={"mainPageSubCards"}
                    />
                </Col>
                <Col>
                    <PromoCard 
                        imageUrl={EmailMe} 
                        textBody={contactText}
                        linkText={"Contact Me"} 
                        linkUrl={"/contact"}
                        insertedClasses={"mainPageSubCards"}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;