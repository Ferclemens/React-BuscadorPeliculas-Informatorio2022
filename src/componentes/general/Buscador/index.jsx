import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import './Buscador.css';

const Buscador = (props) => {
    const [texto, setTexto] = useState('');

    const onTextoChange = (evento) => {
        setTexto(evento.target.value);
    };

    const onBuscarClick = () => {
        props.onBuscar(texto);
    };

    return (
        <section className="buscador">
            <TextField
                label="Buscar Peliculas"
                variant="outlined"
                value={texto}
                onChange={onTextoChange}
            />
            <Button
                variant="contained"
                onClick={onBuscarClick}
            >
                Buscar
            </Button>
        </section>
    )
};

export default Buscador;