import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemsCard from "../ItemsCard/ItemsCard";

const ItemList = ({ datos }) => {
  return (
    <Container fluid>
      <Row>
        {datos.map((dt) => {
          return (
            <Col className=" py-3" sm={6} lg={3} xl={3} key={dt.id}>
              <ItemsCard
                id={dt.id}
                category={dt.category}
                name={dt.name}
                schedule={dt.schedule}
                link={dt.link}
                difficulty={dt.difficulty}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemList;
