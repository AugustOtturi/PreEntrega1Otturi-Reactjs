import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//*Componentes
import ItemList from "../ItemList/ItemList";
import { fCursos } from "../../js/Cursos";

export function ItemListContainer() {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    if (!cid) {
      fCursos()
        .then((res) => setDatos(res))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    } else {
      fCursos()
        .then((res) => {
          setDatos(res.filter((curso) => curso.category.toLowerCase() === cid));
        })
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
            <h2 className="heroSubtitle">Este es un espacio {cid} </h2>
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
