import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
//Provisoriamente
import { ListGroupItem } from "react-bootstrap";

const ItemsCard = ({ id, name, schedule, difficulty, link, category }) => {
  return (
    <Card className="mx-auto d-flex h-100 " id={id} style={{ width: "18rem" }}>
      <Card.Img src={link} className="CARDIMG" />
      <Card.Body className="d-flex flex-column justify-content-around align-items-stretch">
        <Card.Title className="text-center">{name}</Card.Title>
        <ListGroup variant="flush" className="py-2">
          <ListGroupItem>{category}</ListGroupItem>
          <ListGroupItem>{schedule}</ListGroupItem>
          <ListGroupItem>
            Dificultad: <span>{difficulty}</span>
          </ListGroupItem>
        </ListGroup>
        <Link to={`/item/${id}`} className="mx-auto mt-2">
          <Button variant="dark">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemsCard;
