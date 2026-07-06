import React from "react";
import { Row, Col } from "react-bootstrap";
import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";

let textBody = 
    "Full-stack developer and software engineer with experience in automated testing and regression test monitoring.";


function Home() {
    
    return (
        <div >            
            <PromoCard 
                imageUrl={Spheal} 
                textBody={textBody} 
                orientation="horizontal"
                linkText={"About Me"}
                linkUrl={"/about"}
                insertedClasses={"mainPageSplashCard"}
            />

            <Row className="cardRow">
                <Col>
                    <PromoCard 
                        imageUrl={Spheal} 
                        textBody={"Nice things said about me"}
                        linkText={"Referrals"} 
                        linkUrl={"/Referrals"}
                    />
                </Col>
                <Col>                        
                    <PromoCard 
                        imageUrl={Spheal} 
                        textBody={"Blurb about projects"}
                        linkText={"Projects"} 
                        linkUrl={"/projects"}
                    />
                </Col>
                <Col>
                    <PromoCard 
                        imageUrl={Spheal} 
                        textBody={"blurp about contacting me"}
                        linkText={"Contact Me"} 
                        linkUrl={"/contact"}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;