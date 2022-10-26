

const URL = "http://localhost:3004/recetas";

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaRecetas= await respuesta.json()

    return listaRecetas
  } catch (error) {
    console.log(error);
  }
};

export const crearRecetaAPI = async (receta) => {
  try {
    const respuesta = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(receta)

    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`,{
      method:"DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL+"/"+id);
    const recetaBuscada={
      dato:await respuesta.json(),
      status:respuesta.status
    }
    return recetaBuscada;
  } catch (error) {
    console.log(error);
  }
};
export const editarRecetaAPI = async (id,datosActualizados) => {
  try {
    const respuesta = await fetch(URL+"/"+id,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(datosActualizados)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};