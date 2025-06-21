import "./cartwidget.css"
import carrito from "../assets/carrito.png";

const CartWidget = () => {
    return (
        <div className="cartwidget">
            <img className="logo-cartwidget" src={carrito} alt="" />
            <h2>6</h2>
        </div>
    )
}

export default CartWidget;