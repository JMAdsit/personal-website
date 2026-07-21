import React from "react";
import { Row, Col } from "react-bootstrap";
import Spheal from "../assets/Spheal.gif";
import PromoCard from "../components/PromoCard";

function Projects() {

    return (
        <div className="content">
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

export default Projects;