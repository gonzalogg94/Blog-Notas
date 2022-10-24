import React from 'react';
import { Card, Container,Row } from 'react-bootstrap';
import CardReceta from './Receta/CardReceta';

const Inicio = () => {
    return (
       <Container className='mainSection pt-3'>
        <h1 className='display-2 text-center text-white'>Lista De Recetas</h1>
        <hr className='text-white' />
        <Row xs={1} md={4} className="g-4">
            <CardReceta></CardReceta>
      </Row>
       </Container>
    );
};

export default Inicio;<h1>Esto es un titulo</h1>