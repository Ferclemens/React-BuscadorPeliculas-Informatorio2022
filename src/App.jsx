import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BuscarPeliculasPagina from './paginas/BuscarPeliculasPagina';
import PeliculaPagina from './paginas/PeliculaPagina';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="peliculas" element={<BuscarPeliculasPagina />} />
          <Route path="peliculas/:idPelicula" element={<PeliculaPagina />} />
          <Route path="" element={<BuscarPeliculasPagina />} />
          <Route path=":idPelicula" element={<PeliculaPagina />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
