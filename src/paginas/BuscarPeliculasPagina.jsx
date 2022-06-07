import { Container } from "@mui/material";
import { useState } from "react";
import Buscador from "../componentes/general/Buscador";
import ListaPeliculas from "../componentes/peliculas/ListaPeliculas";

const BuscarPeliculasPagina = () => {
    const [busqueda, setBusqueda] = useState('');
    const onBuscar = (criterio) => {
        setBusqueda(criterio);
    };

    return (
        <Container  maxWidth="md" >
            <Buscador onBuscar={onBuscar}/>
            <br></br>
            <ListaPeliculas busqueda={busqueda}/>
        </Container>
    );
};

export default BuscarPeliculasPagina;