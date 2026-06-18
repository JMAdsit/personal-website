import React from "react";
import { Link } from "react-router-dom";

function NavButton({name, link}) {
    return (
        <div className="nav-item mx-2 btn btn-info">
            <Link 
            className="nav-link text-white"
            to={link}>
                {name}
            </Link>
        </div>);
}

export default NavButton;