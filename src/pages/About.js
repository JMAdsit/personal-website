import PromoCard from "../components/PromoCard";
import Spheal from "../assets/Spheal.gif";
import aboutMe from "../content/AboutMeText";

function AboutMe() {

    return (
        <div className="content">            
            <PromoCard 
                title={"Jeremiah Adsit"}
                imageUrl={Spheal} 
                textBody={aboutMe.textBody} 
                horizontal={true}
            />

            <PromoCard 
                title={"Technical Skills"}
                textBody={aboutMe.skills}
            />
        </div>
    );
}

export default AboutMe;