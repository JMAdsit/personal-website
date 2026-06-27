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
            <TextCard className={"text-align-center"}
            textBody={textBody} />
            
            <PromoCard 
            imageUrl={Spheal} 
            textBody={"Bup bup"} 
            orientation="horizontal"
            />

            <Row>
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"} />
                </Col>
                <Col>                        
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"} />
                </Col>
                <Col>
                    <PromoCard 
                    imageUrl={Spheal} 
                    textBody={"Bup bup"} />
                </Col>
            </Row>
        </div>
    );
}

export default Home;