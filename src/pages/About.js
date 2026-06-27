import React from "react";
import TextCard from "../components/TextCard";
import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";

function AboutMe() {
    let title = "About Me";
    let textbody = "Things about me.";

    return (
        <div>
            <TextCard 
                title={title}
                textBody={textbody}
            />
            
            <PromoCard 
            imageUrl={Spheal} 
            textBody={"Bup bup"} 
            orientation="horizontal"/>
        </div>
    );
}

export default AboutMe;