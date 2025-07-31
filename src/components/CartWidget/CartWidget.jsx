import "./cartwidget.css"
import { PiShoppingCartFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="cartwidget">
            <PiShoppingCartFill size={35} />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget