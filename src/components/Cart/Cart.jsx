import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { PiSmileySad } from "react-icons/pi";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

    if(cart.length === 0){
        return(
            <div className="empty-cart">
                <h2>CARRITO VACÍO
                    <PiSmileySad />
                </h2>
                <Link className="button-home-empty-cart" to="/">SEGUIR COMPRANDO</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2 className="title-cart">PRODUCTOS EN CARRITO</h2>
            <div className="subtitles-cart">
                <div></div>
                <p>PRODUCTO</p>
                <p>VALOR UNIDAD</p>
                <p>CANTIDAD</p>
                <p> VALOR TOTAL</p>
                <div></div>
            </div>
            
            {
                cart.map( (productCart) => (
                    <div className="item-cart" key={productCart.id}>
                        <div className="img-item-cart">
                            <img src={productCart.image} alt=""/>
                        </div>
                        <p className="text-item-cart">{productCart.name}</p>
                        <p className="text-item-cart">${productCart.price}</p>
                        <p className="text-item-cart">{productCart.quantity}</p>
                        <p className="text-item-cart">${productCart.price * productCart.quantity}</p>
                        <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) }>
                            <BsFillTrash3Fill />
                        </button>
                    </div>
                ))
            }

            <div className="info-cart">
                <p className="text-info-cart">VALOR TOTAL DE LA COMPRA: ${totalPrice()}</p>
                <Link className="button-continue-cart" to="/checkout">CONTINUAR CON MI COMPRA</Link>
                <button className="button-delete-cart" onClick={deleteCart}>VACIAR CARRITO</button>
            </div>
        </div>
    )
}

export default Cart