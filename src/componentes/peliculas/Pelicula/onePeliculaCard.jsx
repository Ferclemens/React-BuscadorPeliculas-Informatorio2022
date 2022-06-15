import './pelicula.css'

const OnePeliculaCard = ({onePelicula}) => {
    return <div className='pelicula--container'>
                <img src={onePelicula.Poster}/>
                <div className='pelicula--detalle'>
                    <p>Nombre: {onePelicula.Title}</p>
                    <p>Año: {onePelicula.Year}</p>
                    <p>Genero: {onePelicula.Genre}</p>
                    <p>Trama: {onePelicula.Plot}</p>
                    <p>Reparto: {onePelicula.Actors}</p>
                </div>
            </div>
}
export default OnePeliculaCard