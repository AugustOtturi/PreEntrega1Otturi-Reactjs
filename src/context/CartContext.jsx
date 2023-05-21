import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContexProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const agregarAlCarrito = (nuevoProducto) => {
        setCartList([...cartList, nuevoProducto]);
    };

    const agregarProductos = (nuevosProductos) => {
        setCartList([...cartList, ...nuevosProductos]);
    };

    const vaciarCarrito = () => {
        setCartList([]);
    };

    const removerProducto = (itemId) => {
        const carritoActualizado = cartList.filter(
            (producto) => producto.id !== itemId
        );
        setCartList(carritoActualizado);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                agregarAlCarrito,
                vaciarCarrito,
                removerProducto,
                agregarProductos,
            }}>
            {children}
        </CartContext.Provider>
    );
};
