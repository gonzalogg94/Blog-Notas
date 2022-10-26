
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreReceta: "",
      descripcion: "",
      imagen: "",
      categoria: "",
    },
  });

  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde la funcion submit");
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5 text-center text-white">Nueva Receta</h1>
      <hr className="text-white" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Titulo*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar un titulo"
            {...register("nombreReceta", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar una descripcion"
            {...register("descripcion", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "Este dato es obligatorio",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {...register("categoria",{
            required:"Debe seleccionar una categoria"
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="comida caliente">Comida Caliente</option>
            <option value="comida fria">Comida fria</option>
            <option value="pastas">Pastas</option>
            <option value="postres">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
    
};

export default EditarReceta;