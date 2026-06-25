import React from "react";
import TextCard from "../components/TextCard";

function Home() {
    let body = "Full-stack developer and software engineer with experience in automated testing and regression test monitoring.";

    return (
        <div className="main-content-box flex-column justify-content-center m-auto">
            <TextCard 
                cardBody={body}
            />
        </div>
    );
}

export default Home;