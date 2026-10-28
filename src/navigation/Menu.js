import NavButton from "../components/NavButton";
import Stack from "react-bootstrap/Stack";
import { HiMiniCodeBracket } from "react-icons/hi2";

function Menu() {
    return (
        <header role="banner">
            <nav id="nav" className="navbar justify-content-end m-auto">
                <Stack direction="horizontal" gap={5}>
                    <NavButton name="Home" link="/personal-website/" />
                    {/* <NavButton name="Projects" link="/personal-website/projects" />  */}
                    <NavButton name="About" link="/personal-website/about" />
                    <NavButton name="Referrals" link="/personal-website/referrals" /> 
                    <NavButton name="Contact" link="/personal-website/contact" />
                </Stack>
            </nav> 
            <HiMiniCodeBracket id="headerIcon" />
        </header>
    );
}

export default Menu;