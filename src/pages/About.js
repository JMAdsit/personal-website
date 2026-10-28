import PromoCard from "../components/PromoCard";
import Portrait from "../assets/Portrait.jpg";
import aboutMe from "../content/AboutMeText";

function AboutMe() {

    return (
        <div className="content">            
            <PromoCard 
                title={"Jeremiah Adsit"}
                imageUrl={Portrait} 
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