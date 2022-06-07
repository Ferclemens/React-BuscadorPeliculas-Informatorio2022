import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './paginado.css'

const Paginado = ({count, page, onChange}) => {
    return (
        <Stack spacing={2} className="paginado">
            <Pagination shape="rounded" count={count} page={page} onChange={onChange}/>
        </Stack>
    );
};

export default Paginado;
