import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gonzalo from "../img/gonzalo.png"


const Nosotros = () => {
    return (
        <Container className='mainSection py-5'>
        <section className='text-center pb-5'>
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
        <Row className='text-center justify-content-center'>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="logo javaScript" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBSlzXwDKpk-cSeknpRTO_G9iNo8vJJlUtA&usqp=CAU" alt="logo Python" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo-752x440.png" alt="logo NodeJs" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" alt="logo React" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png" alt="logo HTML" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://armyyazilim.com/wp-content/uploads/2019/10/css.png" alt=" logo css" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" alt="logo git" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="logo github" />
            </Col>
            <Col lg={1} md={2} sm={3}>
                <img className='w-50' src="https://mpng.subpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg" alt="logo github" />
            </Col>
        </Row>
        </Container>
    );
};

export default Nosotros;
