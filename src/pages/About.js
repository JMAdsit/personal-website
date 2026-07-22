import React from "react";
import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";
import aboutMe from "../content/AboutMeText";

function AboutMe() {
    let title = "About Me";

    return (
        <div className="content">            
            <PromoCard 
            title={title}
            imageUrl={Spheal} 
            textBody={aboutMe.textBody} 
            horizontal={true}
            />
        </div>
    );
}

export default AboutMe;