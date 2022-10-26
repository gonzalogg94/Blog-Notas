import { useEffect, useState } from "react";
import {Table } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { consultarAPI } from "../helpers/queries";
import ItemReceta from "./Receta/ItemReceta";


const Administrador = () => {
  const [recetas,setRecetas]=useState([])


  useEffect(()=>{
   consultarAPI().then((respuesta)=>{
console.log(respuesta)
setRecetas(respuesta)
   })
  },[])


    return (
      <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-warning" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            recetas.map((receta)=><ItemReceta key={receta.id}receta={receta} setRecetas={setRecetas}></ItemReceta>)
          }
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;