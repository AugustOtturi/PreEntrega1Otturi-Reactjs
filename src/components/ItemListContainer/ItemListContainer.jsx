import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

//*Componentes
import ItemList from '../ItemList/ItemList';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';

export function ItemListContainer() {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { cid } = useParams();

    useEffect(() => {
        const dbFirestore = getFirestore();
        const queryCollection = collection(dbFirestore, 'cursos');
        if (!cid) {
            getDocs(queryCollection)
                .then((res) =>
                    setDatos(
                        res.docs.map((curso) => ({
                            id: curso.id,
                            ...curso.data(),
                        }))
                    )
                )
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false));
        } else {
            const dbFirestore = getFirestore();
            const queryCollection = collection(dbFirestore, 'cursos');
            const queryCollectionFilter = query(
                queryCollection,
                where('category', '==', cid.toLowerCase())
            );

            getDocs(queryCollectionFilter)
                .then((res) =>
                    setDatos(
                        res.docs.map((curso) => ({
                            id: curso.id,
                            ...curso.data(),
                        }))
                    )
                )
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false));
        }
    }, [cid]);

    return (
        <Container fluid className="Hero">
            <Row className="heroRow">
                {!cid ? (
                    <>
                        <h1 className="heroTitle">¡Hola!</h1>
                        <h2 className="heroSubtitle">Bienvenido a DevStore</h2>
                    </>
                ) : (
                    <>
                        <h1 className="heroTitle">¡Hola!</h1>
                        <h2 className="heroSubtitle">
                            Este es un espacio {cid}
                        </h2>
                    </>
                )}
            </Row>
            <Row className="mt-5">
                {isLoading ? (
                    <div className="text-center display-5">Cargando...</div>
                ) : (
                    <ItemList datos={datos} />
                )}
            </Row>
        </Container>
    );
}
export default ItemListContainer;
