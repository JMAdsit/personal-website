import ContactForm from "../components/ContactForm";
import { Card, Row, Col } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";

function ContactMe () {

    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <div className="card-header">
                            <h2 className="card-title text-center">
                                {"Contact Me"}
                            </h2>
                        </div>
                                <ContactForm />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className="card-header">
                            <h2 className="card-title text-center">
                                {"Contact Info"}
                            </h2>
                        </div>
                        <div className="contactInfo">
                            <a 
                            href="mailto:jeremiah.adsit@gmail.com">
                                <TfiEmail /> jeremiah.adsit@gmail.com
                            </a>
                            <a 
                            href="https://www.linkedin.com/in/jeremiah-adsit/">
                                <FaLinkedin /> Linkedin
                            </a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ContactMe;