import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { pid } = useParams();

    useEffect(() => {
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, 'cursos', pid);

        getDoc(queryDoc).then((res) => setProduct(res.data()));
    }, [pid]);

    if (product == undefined) {
        return <Spinner />;
    }

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <ProductNotFound />}
        </div>
    );
};

export default ItemDetailContainer;
