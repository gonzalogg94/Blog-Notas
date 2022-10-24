import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';

const ItemReceta = () => {
    return (
        <tr>
      <td>2</td>
      <td>burrito</td>
      <td>$200</td>
      <td>www.sdsadsadsadd.cs</td>
      <td>comida caliente</td>
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