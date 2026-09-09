import PromoCard from "../components/PromoCard";

function ContactMe () {

    return (
        <div className="content">
            <PromoCard 
                title={"Contact Me"}
                textBody={
`Email: jeremiah.adsit@gmail.com
Linkedin: https://www.linkedin.com/in/jeremiah-adsit/`}
                linkText={"Email Me"}
                linkUrl={"mailto:jeremiah.adsit@gmail.com"}
            />
        </div>
    );
}

export default ContactMe;