import React from "react";
import "./itemdetail.css"

const ItemDetail = ({ product = {} }) => {
    return (
        <div className="item-detail-container">
            <div className="img-detailcontainer">
                <img className="img-itemdetail" src={product.image} alt="" />
            </div>
            <div className="text-detail-container">
                <p className="title-itemdetail">{product.name}</p>
                <p className="description-itemdetail">{product.description}</p>
                <p className="price-itemdetail">${product.price}</p>
                <button>AÑADIR AL CARRITO</button>
            </div>
            
        </div>
    )
}

export default ItemDetail;