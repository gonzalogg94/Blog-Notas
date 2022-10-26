import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardReceta = ({ producto }) => {
  return (
    <Card className="mt-5 bg-black text-white">
      <Card.Img
        className="pt-3"
        variant="top"
        src={producto.imagen}
      />
      <Card.Body className="text-center">
        <Card.Title>{producto.nombreReceta}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Badge bg="warning" text="dark">
        {producto.categoria}
      </Badge>
      </Card.Body>
    </Card>
  );
};

export default CardReceta;
