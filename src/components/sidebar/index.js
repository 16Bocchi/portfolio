import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import KBLogo from "../../assets/images/Kessoku_Band_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faHome,
    faUser,
    faGears,
    faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={KBLogo} alt="logo"></img>
        </Link>

        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#F2EFEB" />
            </NavLink>

            <NavLink
                exact="true"
                activeClassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#F2EFEB" />
            </NavLink>

            <NavLink
                exact="true"
                activeClassname="active"
                className="experience-link"
                to="/experience"
            >
                <FontAwesomeIcon icon={faGears} color="#F2EFEB" />
            </NavLink>

            <NavLink
                exact="true"
                activeClassname="active"
                className="project-link"
                to="/project"
            >
                <FontAwesomeIcon icon={faCode} color="#F2EFEB" />
            </NavLink>

            <NavLink
                exact="true"
                activeClassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#F2EFEB" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/daniel-braithwaite/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#F2EFEB" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
