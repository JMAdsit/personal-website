import React from "react";
import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";

function AboutMe() {
    let title = "About Me";
    let textbody = "Things about me.";

    return (
        <div>            
            <PromoCard 
            title={title}
            imageUrl={Spheal} 
            textBody={textbody} 
            orientation="horizontal"
            />
        </div>
    );
}

export default AboutMe;