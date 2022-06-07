import './pelicula.css'; 

const Pelicula = ({Title, Poster}) => {
  return (
    <div className='card--pelicula'>
      <img src={Poster} className='card--img'/>
      <h3 className='card--title'>{Title}</h3>
    </div>
  );
};

export default Pelicula;