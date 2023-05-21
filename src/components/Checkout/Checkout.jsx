import React, { useMemo, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';

import { groupCartItems } from '../CartWidget/CartWidget';

import { useCartContext } from '../../context/CartContext';

/* Checkout mínimo:
○ Items con sus cantidades
○ Total de la orden
○ Input para nombre, apellido y teléfono
○ Input para email y lógica de repetir el email 2 veces (a excepción de
que realicen el desafío extra de auth, en ese caso no sería necesario)
● Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
● La navegabilidad debe ocurrir utilizando el router, y no href’s o location. */

const Checkout = () => {
    const { cartList } = useCartContext();

    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email1: '',
        email2: '',
    });

    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    const formattedCartList = useMemo(
        () => groupCartItems(cartList),
        [cartList]
    );

    const totalPrice = cartList.reduce(
        (total, item) => total + parseInt(item.price),
        0
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Crear orden
    };

    const handleInputChange = (e) => {
        setFormValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const realizarCompraBtnDisabled =
        formValues.email1 !== formValues.email2 || !formValues.email1;

    useEffect(() => {
        if (cartList.length === 0) {
            navigate('/');
        }
    }, [cartList]);

    return (
        <Form className="formulario" onSubmit={handleSubmit}>
            {formattedCartList.map((productosAgrupados, indx) => (
                <div
                    className="d-flex justify-content-between align-items-center"
                    key={indx}>
                    <h5 className="cartItemLineName">
                        {productosAgrupados.items[0].name}
                    </h5>
                    <div className="d-flex justify-content-between">
                        <p>
                            $ {productosAgrupados.items[0].price}
                            <span className="checkoutItemsCount">
                                x {productosAgrupados.items.length}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
            <div className="line"></div> <p>Total: $ {totalPrice}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    name="nombre"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Juan, Manuel, Pedro.."
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    name="apellido"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Martinez, Garcia, Rizoto"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    name="telefono"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="+54 112244-6655"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="email1"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="augustotturi.dev@gmail.com"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control
                    name="email2"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="augustotturi.dev@gmail.com"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="reset">
                Reset
            </Button>
            <Button
                variant="primary"
                type="submit"
                disabled={realizarCompraBtnDisabled}>
                Realizar compra
            </Button>
        </Form>
    );
};

export default Checkout;
