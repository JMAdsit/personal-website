import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Referrals from "../pages/Referrals";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function Routing() {
    return (
            <Routes>
                <Route exact={true} path="/" element={<Home />} />

                <Route exact={true} path="/projects" element={<Projects />} />

                <Route exact={true} path="/about" element={<About />} />

                <Route exact={true} path="/referrals" element={<Referrals />} />

                <Route exact={true} path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default Routing;