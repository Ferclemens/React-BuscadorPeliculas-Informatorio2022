import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BuscarPeliculasPagina from './paginas/BuscarPeliculasPagina';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="peliculas" element={<BuscarPeliculasPagina />} />
        <Route path="" element={<BuscarPeliculasPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
