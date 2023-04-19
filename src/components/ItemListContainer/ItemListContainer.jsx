import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//*Componentes
import ItemList from "../ItemList/ItemList";

export function ItemListContainer({ Saludo }) {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fCursos() {
      setTimeout(async () => {
        const res = await fetch("../../src/json/Cursos.json");
        const data = await res.json();
        setDatos(data);
        setIsLoading(false);
      }, 1000);
    }
    fCursos();
  }, []);

  return (
    <Container fluid className="Hero">
      <Row className="heroRow">
        <h1 className="heroTitle">{Saludo.title}</h1>
        <h2 className="heroSubtitle">{Saludo.subtitle}</h2>
      </Row>
      <Row>
        {isLoading ? <div>Cargando...</div> : <ItemList datos={datos} />}
      </Row>
    </Container>
  );
}
