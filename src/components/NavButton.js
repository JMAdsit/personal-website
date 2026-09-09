import { Link } from "react-router-dom";

function NavButton({name, link, title}) {
    return (
        <Link 
            className={"nav-link"}
            title={title}
            to={link}>
            {name}
        </Link>
    );
}

export default NavButton;