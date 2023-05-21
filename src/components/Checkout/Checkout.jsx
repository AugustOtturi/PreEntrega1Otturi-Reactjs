import React, { useMemo, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';

import {
    getFirestore,
    addDoc,
    collection,
    Timestamp,
    doc,
} from 'firebase/firestore';

import { groupCartItems } from '../CartWidget/CartWidget';

import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';

const Checkout = () => {
    const { cartList, vaciarCarrito } = useCartContext();

    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email1: '',
        email2: '',
    });

    const [emailError, setEmailError] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const navigate = useNavigate();

    const formattedCartList = useMemo(
        () => groupCartItems(cartList),
        [cartList]
    );

    const totalPrice = cartList.reduce(
        (total, item) => total + parseInt(item.price),
        0
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        vaciarCarrito();

        const { nombre, apellido, email1, telefono } = formValues;
        const timestamp = Timestamp.fromDate(new Date());

        const cursosDocRefs = [];

        for (const item of cartList) {
            const personDocRef = doc(db, 'cursos', item.id);
            cursosDocRefs.push(personDocRef);
        }

        const data = {
            buyer: {
                nombre,
                apellido,
                email: email1,
                telefono,
            },
            fecha: timestamp,
            items: cursosDocRefs,
        };

        const order = await addDoc(collection(db, 'ordenes'), data);
        setOrderId(order.id);
    };

    const handleInputChange = (e) => {
        setFormValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const realizarCompraBtnDisabled =
        formValues.email1 !== formValues.email2 || !formValues.email1;

    return (
        <>
            {orderId ? (
                <div className="ordenIdFinal">
                    <p className="">El id de su orden es: {orderId}</p>
                    <button
                        className="btn btn-dark"
                        onClick={() => navigate('/')}>
                        Volver al menú
                    </button>
                </div>
            ) : (
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
                            value={formValues.nombre}
                            type="text"
                            placeholder="Juan, Manuel, Pedro.."
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            name="apellido"
                            onChange={handleInputChange}
                            value={formValues.apellido}
                            type="text"
                            placeholder="Martinez, Garcia, Rizoto"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            name="telefono"
                            onChange={handleInputChange}
                            value={formValues.telefono}
                            type="text"
                            placeholder="+54 112244-6655"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email1"
                            onChange={handleInputChange}
                            value={formValues.email1}
                            type="email"
                            placeholder="augustotturi.dev@gmail.com"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Repetir Email</Form.Label>
                        <Form.Control
                            name="email2"
                            onChange={handleInputChange}
                            value={formValues.email2}
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
            )}
        </>
    );
};

export default Checkout;
