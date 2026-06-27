import React from "react";
import TextCard from "../components/TextCard";

function Home() {
    let textBody = "Full-stack developer and software engineer with experience in automated testing and regression test monitoring.";

    return (
        <div className="text-card flex-column justify-content-center m-auto">
            <TextCard 
                textBody={textBody}
            />
        </div>
    );
}

export default Home;