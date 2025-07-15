import React from "react";
import useProduct from "../../hooks/useProduct.js";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemdetailcontainer.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const { product, loading } = useProduct(productId);

    return (
        <div className="itemdetailcontainer">
            {
                loading ? <Loading /> : <ItemDetail product={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;