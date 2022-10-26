import { Form, Button } from "react-bootstrap";

const EditarReceta = () => {
    return (
        <section className="container mainSection">
      <h1 className="display-4 mt-5 text-center text-white">Editar Receta</h1>
      <hr className="text-white" />
      <Form>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Titulo*</Form.Label>
          <Form.Control type="text" placeholder="Titulo" />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control type="text" placeholder="Descripcion" />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="comida caliente">Comida Caliente</option>
            <option value="comida fria">Comida fria</option>
            <option value="dulce">Pastas</option>
            <option value="salado">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
    );
};

export default EditarReceta;