import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Referrals from "../pages/Referrals";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function Routing() {
    return (
            <Routes>
                <Route exact={true} path="/personal-website/" element={<Home />} />

                {/* <Route exact={true} path="/personal-website/projects" element={<Projects />} /> */}

                <Route exact={true} path="/personal-website/about" element={<About />} />

                <Route exact={true} path="/personal-website/referrals" element={<Referrals />} />

                <Route exact={true} path="/personal-website/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default Routing;