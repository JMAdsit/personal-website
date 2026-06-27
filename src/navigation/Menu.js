import React from "react";
import NavButton from "../components/NavButton";
import Stack from 'react-bootstrap/Stack';

function Menu() {
    return (
        <header role="banner">
            <nav id="nav" className="navbar justify-content-end m-auto">
                <Stack direction="horizontal" gap={5}>
                    <NavButton name="Home" link="/" />
                    <NavButton name="About" link="/about" />
                    <NavButton name="Projects" link="/projects" /> 
                </Stack>
            </nav> 
        </header>
    );
}

export default Menu;