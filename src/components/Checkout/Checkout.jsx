import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";
import { PiSmileyWinkLight } from "react-icons/pi";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    })
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name] : event.target.value } );
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }

        uploadOrder(order);
    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
        } catch (error) {
            console.log("error al subir la orden")
        }
    }

    return (
        <div className="checkout">
            {
                orderId ? (
                    <div>
                        <h2>¡ORDEN GENERADA EXITOSAMENTE!
                            <PiSmileyWinkLight />
                        </h2>
                        <p>Guarda el número de tu orden: {orderId}</p>
                        <Link className="button-home-empty-cart" to="/">SEGUIR COMPRANDO</Link>
                    </div>
                ) : (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder} />
                )
            }
        </div>
    )
    
}

export default Checkout