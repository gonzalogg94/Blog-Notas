import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

const ItemReceta = ({receta}) => {
    return (
      <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link className="btn btn-warning">Editar</Link>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
    );
};

export default ItemReceta;