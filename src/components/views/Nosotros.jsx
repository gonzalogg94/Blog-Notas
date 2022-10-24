import React from 'react';
import { Container } from 'react-bootstrap';
import gonzalo from "../img/gonzalo.png"

const Nosotros = () => {
    return (
        <Container className='mainSection pt-5'>
        <section className='text-center'>
            <img className='w-25' src={gonzalo} alt="avatar de gonzalo" />
            <p className='text-center text-white'>Hola, mi nombre es Gonzalo tengo 27 años, soy profesor de
                        Educación Física egresado de la UNT y estoy realizando mi tesis
                        para recibirme de licenciado. Siempre me atrajo la informática
                        aunque nunca me anime a realizar una carrera dedicada
                        exclusivamente a ello. Durante la pandemia mi curiosidad por la
                        programación despertó a lo que empecé por mi cuenta a estudiar
                        Python y luego realicé un curso de Css y Html. Hablando con un
                        amigo me comentó sobre Rolling Code y las buenas referencias que
                        tenía esta academia a lo que decidí inscribirme . Estoy muy
                        feliz de entrar en un mundo donde el limite es nuestra
                        creatividad. Saludos a todos.</p>
        </section>
        </Container>
    );
};

export default Nosotros;
