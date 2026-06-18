import React from "react";
import MainCard from "../components/MainCard";

function AboutMe() {
    let title = "About Me";
    let body = "Things about me.";

    return (
        <div className="d-flex flex-column justify-content-center">
            <MainCard 
                title={title}
                body={body}
            />
        </div>
    );
}

export default AboutMe;