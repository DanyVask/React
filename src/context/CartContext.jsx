import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newProduct) => {
        const existingProduct = cart.find(product => product.id === newProduct.id);

        if (existingProduct) {
            const updatedCart = cart.map(product => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + newProduct.quantity
                    };
                }
                return product;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, newProduct]);
        }
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0 );
        return total;
    };

    const totalPrice = () => {
        const total = cart.reduce((total,product) => total + ( product.price * product.quantity ), 0 );
        return total;
    };

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((product) => product.id !== id );
        setCart(productsFilter);
    };

    const deleteCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };