import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({
    id,
    name,
    teacher,
    link,
    schedule,
    difficulty,
    price,
    description,
}) => {
    const { agregarAlCarrito, agregarProductos } = useCartContext();

    const onAdd = (cantidad) => {
        const productos = [];
        for (let i = 0; i < cantidad; i++) {
            const producto = { name, price, id };
            productos.push(producto);
        }

        agregarProductos(productos);
    };

    return (
        <Container className="pt-3 pb-5 mb-5">
            <Row>
                <h1 className="text-center my-5">{name}</h1>
                <Col className="mt-4" xl={6} md={6} xs={12}>
                    <div className="CardItemDescription h-100">
                        <p>{description}</p>
                    </div>
                </Col>
                <Col className="mt-4" xl={6} md={6} xs={12}>
                    <div className="cardItemDetail d-flex justify-content-around align-items-center flex-column h-100">
                        <img className=" imgDetail" src={link} alt="" />
                        <h4>{teacher}</h4>
                        <h4>Horarios: {schedule}</h4>
                        <h4>Dificultad: {difficulty}</h4>
                        <h4>Precio: {price}</h4>

                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;
