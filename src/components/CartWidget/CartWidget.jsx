import "./cartwidget.css"
import { PiShoppingCartFill } from "react-icons/pi";

const CartWidget = () => {
    return (
        <div className="cartwidget">
            <PiShoppingCartFill size={35} />
            <p>2</p>
        </div>
    )
}

export default CartWidget