import { FiShoppingCart } from 'react-icons/fi';
import React, { useState, useMemo } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCartContext } from '../../context/CartContext';
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function groupCartItems(cartList) {
    return cartList.reduce((formatted, item) => {
        const productsGrouped = formatted.find(
            (product) => product.itemId === item.id
        );

        if (productsGrouped) {
            productsGrouped.items.push(item);
        } else {
            formatted.push({
                itemId: item.id,
                items: [item],
            });
        }

        return formatted;
    }, []);
}

export function CartWidget({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cartList, vaciarCarrito, removerProducto } = useCartContext();

    const navigate = useNavigate();

    const formattedCartList = useMemo(
        () => groupCartItems(cartList),
        [cartList]
    );

    const totalPrice = cartList.reduce(
        (total, item) => total + parseInt(item.price),
        0
    );

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
                    {formattedCartList.map((productosAgrupados, indx) => (
                        <div className="cartItemLine" key={indx}>
                            <div
                                onClick={() =>
                                    removerProducto(productosAgrupados.itemId)
                                }>
                                <FiTrash />
                            </div>
                            <p className="cartItemLineName">
                                {productosAgrupados.items[0].name}
                            </p>
                            <p className="cartItemLinePrice">
                                ${productosAgrupados.items[0].price}
                            </p>
                            <p className="cartItemLineCant">
                                {productosAgrupados.items.length}
                            </p>
                        </div>
                    ))}
                    <div className="line"></div>

                    <p>Total: ${totalPrice}</p>

                    <div className="line"></div>
                    <button
                        className="btn btn-dark btnCartVaciar"
                        onClick={vaciarCarrito}>
                        Vaciar carrito
                    </button>
                    <button
                        className="mx-2 btn btn-dark"
                        onClick={() => navigate('/checkout')}>
                        Ir a pagar
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
