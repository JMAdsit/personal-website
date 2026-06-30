import React from "react";
import TextCard from "../components/TextCard";
import { Row, Col } from "react-bootstrap";
import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";

let textBody = 
    "Full-stack developer and software engineer with experience in automated testing and regression test monitoring.";


function Home() {
    
    return (
        <div >
            <TextCard 
            insertedClasses={"text-center"}
            textBody={textBody} />
            
            <PromoCard 
            imageUrl={Spheal} 
            textBody={"Bup bup"} 
            orientation="horizontal"
            linkText={"Link"}
            />

            <Row className="cardRow">
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={textBody + textBody}
                    linkText={"Link"} />
                </Col>
                <Col>                        
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"}
                    linkText={"Link"} />
                </Col>
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"}
                    linkText={"Link"} />
                </Col>
            </Row>

            <Row className="cardRow">
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={textBody}
                    linkText={"Link"} />
                </Col>
                <Col>                        
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"}
                    linkText={"Link"} />
                </Col>
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"}
                    linkText={"Link"} />
                </Col>
            </Row>
        </div>
    );
}

export default Home;