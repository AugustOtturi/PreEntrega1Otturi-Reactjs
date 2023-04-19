import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

//Provisoriamente
import { ListGroupItem } from "react-bootstrap";

const ItemsCard = ({
  id,
  name,
  teacher,
  price,
  schedule,
  difficulty,
  link,
}) => {
  return (
    <Card className="mx-auto d-flex h-100 " id={id} style={{ width: "18rem" }}>
      <Card.Img src={link} className="CARDIMG" />
      <Card.Body className="d-flex flex-column justify-content-around align-items-stretch">
        <Card.Title className="text-center">{name}</Card.Title>
        <ListGroup variant="flush" className="py-2">
          <ListGroupItem>{teacher}</ListGroupItem>
          <ListGroupItem>{schedule}</ListGroupItem>
          <ListGroupItem>
            Dificultad: <span>{difficulty}</span>
          </ListGroupItem>
        </ListGroup>
        <Button variant="dark">Ver mas</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemsCard;
