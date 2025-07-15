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
            <h2 className="welcome-title">PAWTOPIA SHOP</h2>
            <p className="welcome-p">¡Un lugar donde podrás encontrar todo lo que necesitas para tu mascota!</p>
            {
                loading ? <Loading /> : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer;