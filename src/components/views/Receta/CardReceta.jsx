import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardReceta = () => {
    return (
        <Card className='mt-5 bg-black text-white'>
      <Card.Img className='pt-3' variant="top" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body className='text-center'>
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