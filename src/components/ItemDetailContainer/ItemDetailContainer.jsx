import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { pid } = useParams();

    useEffect(() => {
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, 'cursos', pid);

        getDoc(queryDoc).then((res) => setProduct(res.data()));
    }, [pid]);

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <ProductNotFound />}
        </div>
    );
};

export default ItemDetailContainer;
