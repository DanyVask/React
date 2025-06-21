import "./navbar.css";
import pawtopiaLogo from "../assets/logo-color.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={pawtopiaLogo} alt="" />
            
            <ul className="categories">
                <li>Juguetes</li>
                <li>Correas</li>
                <li>Camas</li>
            </ul>

            <CartWidget />
        </div>
    )
}

export default NavBar;