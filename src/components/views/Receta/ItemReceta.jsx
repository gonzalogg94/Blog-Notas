import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { borrarRecetaAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta,setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la receta?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarRecetaAPI(receta.id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              
              setRecetas(respuesta)
            })
            Swal.fire(
              "Receta eliminada",
              "La receta fue correctamente eliminada",
              "success"
            );
          }else{
            Swal.fire(
              "Se produjo un error al intentar eliminar la receta",
              "Intente realizar esta operacion mas tarde",
              "success"
            );
          }
        });
      }
    });
  };
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${receta.id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
