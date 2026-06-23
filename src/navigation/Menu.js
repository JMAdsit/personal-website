import React from "react";
import NavButton from "../components/NavButton";
import Stack from 'react-bootstrap/Stack';
import { Container, Row, Col } from "react-bootstrap";

function Menu() {
    return (
        <header role="banner">
            <Container>
                <Row>
                    <Col>
                        <nav id="nav" className="navbar justify-content-center">
                            <Stack direction="horizontal" gap={5}>
                                <NavButton name="Home" link="/" />
                                <NavButton name="About" link="/aboutme" />
                                <NavButton name="Projects" link="/projects" /> 
                            </Stack>
                        </nav> 
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Menu;