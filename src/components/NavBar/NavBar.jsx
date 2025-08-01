import "./navbar.css";
import pawtopiaLogo from "../../assets/logo-color.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="logo" src={pawtopiaLogo} alt="" />
            </Link>
            
            <ul className="categories">
                <li>
                    <Link to="/category/juguetes" className="category">JUGUETES</Link>
                </li>
                <li>
                    <Link to="/category/correas" className="category">CORREAS</Link>
                </li>
                <li>
                    <Link to="/category/camas" className="category">CAMAS</Link>
                </li>
            </ul>

            <CartWidget />
        </div>
    )
}

export default NavBar;