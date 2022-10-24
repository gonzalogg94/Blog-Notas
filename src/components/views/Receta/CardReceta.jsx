import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardReceta = () => {
    return (
        <Card className='mt-5'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Conocer mas</Button>
      </Card.Body>
    </Card>
    );
};

export default CardReceta;