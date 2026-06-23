import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

function Routing() {
    return (
            <Routes>
                <Route exact={true} path="/" element={<Home />} />

                <Route exact={true} path="/aboutme" element={<AboutMe />} />

                <Route exact={true} path="/projects" element={<Projects />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default Routing;