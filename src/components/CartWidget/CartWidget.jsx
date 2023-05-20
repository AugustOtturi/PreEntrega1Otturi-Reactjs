import { FiShoppingCart } from 'react-icons/fi';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCartContext } from '../../context/CartContext';

export function CartWidget({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cartList, vaciarCarrito, removerProducto } = useCartContext();

    console.log(cartList);

    return (
        <div className="cartWidget">
            {cartList.length > 0 ? (
                <div className="badge">
                    <p>{cartList.length}</p>
                </div>
            ) : null}

            <FiShoppingCart
                onClick={handleShow}
                className="ShoppingCart"></FiShoppingCart>

            <Offcanvas
                show={show}
                placement="end"
                onHide={handleClose}
                {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="cartTitle">
                        Carrito de compras
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartList.map((producto, indx) => (
                        <div className="cartItemLine" key={indx}>
                            <button
                                onClick={() => removerProducto(producto.id)}>
                                X
                            </button>
                            <p className="cartItemLineName">{producto.name}</p>
                            <p className="cartItemLinePrice">
                                {producto.price}
                            </p>
                            <p className="cartItemLineCant">
                                {producto.cantidad}
                            </p>
                        </div>
                    ))}
                    <div className="line"></div>
                    <button
                        className="btn btn-dark btnCartVaciar"
                        onClick={vaciarCarrito}>
                        Vaciar carrito
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

/* export function CartWidget() {
    const [count, plusOne] = useState(0);
    return (
        <div className="cartWidget">
            <FiShoppingCart
                onClick={() => plusOne(count + 1)}
                className="ShoppingCart"
            />
            <p>{count}</p>
        </div>
    );
} */
