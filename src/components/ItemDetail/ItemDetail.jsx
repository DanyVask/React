import React from "react";

const ItemDetail = ({ product = {} }) => {
    return (
        <div className="item-detail-container">
                <img className="img-itemdetail" src={product.image} alt="" />
            
                <p className="title-detailcontainer">{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
            
        </div>
    )
}

export default ItemDetail;