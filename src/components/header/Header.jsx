import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <p>Houari Bassem</p>
                <div className="mini-logo">web dev</div>
            </div>
            <div className="navbar">
                <ul className="navbar-item">
                    <li><NavLink to="/home">home</NavLink></li>
                    <li><NavLink to="/me">me</NavLink></li>
                    <li><NavLink to="/work">work</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;