import { useEffect, useState } from "react";
import Loading from "../../general/Loading";
import Paginado from "../../general/Paginado";
import Pelicula from "../Pelicula";
import './ListaPeliculas.css';
import { getPeliculas } from "../../../servicios/peliculas";
import { Link } from "react-router-dom";

const Peliculas = ({peliculas}) => {
    return (
        <section className="lista-peliculas">
            {peliculas && peliculas.map((val, index) => 
            <Link key={index} to={val.imdbID}>
                <Pelicula {...val}/>
            </Link>
            )}
        </section>
    )
};

const ListaPeliculas = ({busqueda}) => {
    const [peliculas, setPeliculas] = useState();
    const [loading, setLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(0);
    const [error, setError] = useState('')

    const getpeliculasDesdeServicio = async (busqueda) =>{
        setLoading(true);
        const respuesta = await getPeliculas(busqueda, pagina);
        if(respuesta.Error){
            setError(respuesta.Error)
        }
        setPeliculas(respuesta.Search);
        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(totalPaginas);
        setLoading(false);
    };
    const onChangePaginacion = (_evento, p) => {
        setPagina(p);
    }

    useEffect(() => {
        if(busqueda){
            getpeliculasDesdeServicio(busqueda, pagina)
        }
    }, [busqueda,  pagina])
    
    if (loading){
        return <Loading />
    }
    if (peliculas){
        return (
            <>
                <Peliculas peliculas={peliculas}  />
                <Paginado page={pagina} count={cantidadPaginas} onChange={onChangePaginacion}/>
            </>
        )
    } 
    if (!peliculas) {
        return (
            <div className='error--container'>
                {error}
            </div>
        )
    }
};


export default ListaPeliculas;