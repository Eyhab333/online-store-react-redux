
import { Box, Typography, useTheme } from '@mui/material';

const Notfound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h1" color={theme.palette.error.main}>Not Found</Typography>
    </Box>
  );
}

export default Notfound;
