

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
