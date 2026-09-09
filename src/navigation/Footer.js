import { Col, Row } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";


function Footer () {
    return (
        <footer id="footer">
            <Col>
                <Row>
                    <Col>
                        <a 
                            className="footerLink" 
                            title="jeremiah.adsit@gmail.com" 
                            href="mailto:jeremiah.adsit@gmail.com">
                            <TfiEmail />
                        </a>
                        &emsp;
                        <a 
                            className="footerLink" 
                            title="https://www.linkedin.com/in/jeremiah-adsit" 
                            href="https://www.linkedin.com/in/jeremiah-adsit/">
                            <FaLinkedin />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Copyright © 2026 Jeremiah Adsit
                        &ensp;|&ensp;
                        Images by <a href="https://www.vectorportal.com" >Vectorportal.com</a>,  <a class="external text" href="https://creativecommons.org/licenses/by/4.0/" >CC BY</a>
                    </Col>
                </Row>
            </Col>
        </footer>
    )
}

export default Footer;