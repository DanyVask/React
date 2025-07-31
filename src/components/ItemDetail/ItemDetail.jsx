import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const ItemDetail = ({ product = {} }) => {
    const { addProductInCart } = useContext(CartContext);

    const addProduct = (quantity) => {
        const productCart = { ...product, quantity };

        addProductInCart(productCart);

        toast.success(
            <div>
                <p style={{
                fontFamily: "'Poppins', sans-serif",
                color: "white",
                fontWeight: 600,
                fontSize: 20,
                margin: 0
                }}>
                    {product.name} agregado al carrito
                </p>
                <Link to="/cart" style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "white",
                textDecoration: "underline",
                padding: 10
                }}>
                    Ir al carrito
                </Link>
            </div>,
            {
                autoClose: 3000,
                className: "alert-toast",
                closeButton: true,
            }
        );

    };

    return (
        <div className="item-detail-container">
            <div className="img-detailcontainer">
                <img className="img-itemdetail" src={product.image} alt="" />
            </div>
            <div className="text-detail-container">
                <p className="title-itemdetail">{product.name}</p>
                <p className="description-itemdetail">{product.description}</p>
                <p className="price-itemdetail">${product.price}</p>
                < ItemCount stock={product.stock} addProduct={addProduct} />
            </div>
            
        </div>
    )
}

export default ItemDetail;