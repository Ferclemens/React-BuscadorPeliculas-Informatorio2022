import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './loading.css'

const Loading = () => {
    return (
        <Box className='loading'>
          <CircularProgress />
        </Box>
      );
};

export default Loading;
