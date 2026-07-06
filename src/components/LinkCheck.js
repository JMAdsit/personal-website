import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

function LinkCheck ({linkText, linkUrl}) {
    if (!linkText) return null;

    return (<
        Row className="linkRow">
            <Link 
                className="button promoCardLink"
                to={linkUrl}>
                {linkText}
                <FaChevronCircleRight className="linkIcon" />
            </Link>
        </Row>
    )
}

export default LinkCheck;