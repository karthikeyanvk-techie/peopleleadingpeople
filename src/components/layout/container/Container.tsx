import { Box } from '@mui/material';

import Navbar from '../navbar/Navbar';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar auth />
      <Box sx={{ display: 'flex' }}>
        <Box component={'main'}>{children}</Box>
      </Box>
    </>
  );
};

export default Container;
