import React from "react";
import { Row, Col } from "react-bootstrap";
import PromoCard from "../components/PromoCard";
import MainCardPic from "../assets/coding-programming-vectorpo.png";
import ReferralPic from "../assets/employee-directory-vector.png";
import EmailMe from "../assets/envelope-and-pen-vectorportal.png";

let textBody = 
    "Full-stack developer and software engineer with experience in automated testing and regression test monitoring.";


function Home() {
    
    return (
        <div className="content">            
            <PromoCard 
                imageUrl={MainCardPic} 
                textBody={textBody} 
                orientation="horizontal"
                linkText={"About Me"}
                linkUrl={"/about"}
                insertedClasses={"mainPageSplashCard"}
            />

            <Row className="cardRow">
                <Col>
                    <PromoCard 
                        imageUrl={ReferralPic} 
                        textBody={"Nice things said about me"}
                        linkText={"Referrals"} 
                        linkUrl={"/Referrals"}
                        insertedClasses={"mainPageSubCards"}
                    />
                </Col>
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
                        imageUrl={EmailMe} 
                        textBody={"blurp about contacting me"}
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