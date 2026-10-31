import NavButton from "../components/NavButton";
import Stack from "react-bootstrap/Stack";
import { HiMiniCodeBracket } from "react-icons/hi2";

function Menu() {
    return (
        <header role="banner">
            <nav id="nav" className="navbar justify-content-end m-auto">
                <Stack direction="horizontal" gap={5}>
                    <NavButton name="Home" link="/portfolio/" />
                    {/* <NavButton name="Projects" link="/portfolio/projects" />  */}
                    <NavButton name="About" link="/portfolio/about" />
                    <NavButton name="Referrals" link="/portfolio/referrals" /> 
                    <NavButton name="Contact" link="/portfolio/contact" />
                </Stack>
            </nav> 
            <HiMiniCodeBracket id="headerIcon" />
        </header>
    );
}

export default Menu;