import React from "react";
import { Link } from "react-router-dom";

function NavButton({name, link}) {
    return (
        <Link 
            className={"nav-link"}
            to={link}>
            {name}
        </Link>
    );
}

export default NavButton;