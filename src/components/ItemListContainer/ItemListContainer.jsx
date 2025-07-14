import useProducts from "../../hooks/useProducts.js";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const { category } = useParams();
    const { products, loading } = useProducts(category);

    return (
        <div className="itemlistcontainer">
            <h2>Bienvenidos a Pawtopia Shop</h2>
            {
                loading ? <Loading /> : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer;