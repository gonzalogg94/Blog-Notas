import React from 'react';
import { Container,Row } from 'react-bootstrap';
import CardReceta from './Receta/CardReceta';
import { useState,useEffect } from 'react';
import { consultarAPI } from '../helpers/queries';

const Inicio = () => {
    const [recetas, setRecetas] = useState([]);
  useEffect(()=>{

    // opcion 1
    consultarAPI().then((respuesta)=>{
      console.log(respuesta)
      setRecetas(respuesta)
    })
},[])
    return (
       <Container className='mainSection py-4'>
        <h1 className='display-2 text-center text-white'>Lista De Recetas</h1>
        <hr className='text-white' />
        <Row xs={1} md={4} className="g-4">
            {
                recetas.map((producto)=> <CardReceta key={producto.id} producto={producto} setProductos={setRecetas}></CardReceta> )

            }
      </Row>
       </Container>
    );
};

export default Inicio;<h1>Esto es un titulo</h1>