//Crear contexto incializado con un array vacio
//se exporta en app
//y se usa en app

import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContexProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    //!Agregar al carrito
    const agregarAlCarrito = (nuevoProducto) => {
        setCartList([...cartList, nuevoProducto]);
    };

    // Agregar multiples productois
    const agregarProductos = (nuevosProductos) => {
        console.log('RENDER');
        setCartList([...cartList, ...nuevosProductos]);
    };

    //!Limpiar el carrito
    const vaciarCarrito = () => {
        setCartList([]);
    };
    //!Eliminar un solo elemento del carrito
    const removerProducto = (itemId) => {
        const carritoActualizado = cartList.filter(
            (producto) => producto.id !== itemId
        );
        setCartList(carritoActualizado);
    };
    //!Funcion para sumar cuando un elemento ya se encuentra
    const EstaEnElCarrito = (itemId) => {
        return cartList.some((producto) => producto.id === itemId);
    };
    //Funcion de total  de todo.
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
