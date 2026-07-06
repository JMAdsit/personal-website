import React from "react";
import NavButton from "../components/NavButton";
import Stack from "react-bootstrap/Stack";
import { HiMiniCodeBracket } from "react-icons/hi2";

function Menu() {
    return (
        <header role="banner">
            <nav id="nav" className="navbar justify-content-end m-auto">
                <Stack direction="horizontal" gap={5}>
                    <NavButton name="Home" link="/" />
                    <NavButton name="About" link="/about" />
                    <NavButton name="Referrals" link="/referrals" /> 
                    <NavButton name="Projects" link="/projects" /> 
                    <NavButton name="Contact" link="/contact" /> 
                </Stack>
            </nav> 
            <HiMiniCodeBracket id="headerIcon" />
        </header>
    );
}

export default Menu;