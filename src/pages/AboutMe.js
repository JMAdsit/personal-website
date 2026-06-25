import React from "react";
import TextCard from "../components/TextCard";

function AboutMe() {
    let title = "About Me";
    let body = "Things about me.";

    return (
        <div className="d-flex flex-column justify-content-center">
            <TextCard 
                title={title}
                body={body}
            />
        </div>
    );
}

export default AboutMe;