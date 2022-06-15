import { API_KEY } from "./constantes";
import { OMDB_API_HOST } from "./constantes";

export const getPeliculas= async (criterioBusqueda = '', pagina = 1) => {
    try {
        //http://www.omdbapi.com/?s=batman&apikey=a37c9f0&
        const respuesta = await fetch (`${OMDB_API_HOST}?s=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina}`);
        return respuesta.json();
    } catch (error) {
        return {isError: true};
    }
};

export const getPelicula= async (idPelicula = 0) => {
    try {
        const respuesta = await fetch (`${OMDB_API_HOST}?i=${idPelicula}&apikey=${API_KEY}`);
        return respuesta.json();
    } catch (error) {
        return {isError: true};
    }
};