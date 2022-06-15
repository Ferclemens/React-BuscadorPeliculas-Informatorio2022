import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPelicula } from '../servicios/peliculas';
import Loading from '../componentes/general/Loading'
import OnePeliculaCard from '../componentes/peliculas/Pelicula/onePeliculaCard';

export default function PeliculaPagina() {
    const {idPelicula} = useParams();
    const [onePelicula, setOnePelicula] = useState();
    const [loading, setLoading] = useState(false);

    const getPeliculaDesdeServicio = async () => {
        setLoading(true);
        const resultado = await getPelicula(idPelicula);
        setOnePelicula(resultado);
        setLoading(false);
    }

    useEffect(() => {
        if(!onePelicula){
            getPeliculaDesdeServicio()
        }
    }, [onePelicula])
    if(loading){
        <Loading />
    }
    if (!onePelicula) return null;

    return (
        <OnePeliculaCard onePelicula={onePelicula}/>
    )
}
