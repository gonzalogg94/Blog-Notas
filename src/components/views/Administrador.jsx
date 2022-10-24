import {Table } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ItemReceta from "./Receta/ItemReceta";

const Administrador = () => {
    return (
            <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 text-white ">Productos disponibles</h1>
        <Link className="btn btn-warning" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr className="text-white" />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
            <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;