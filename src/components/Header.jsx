import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

function Header({ title, subtitle }) {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="center">
      <Box
        borderBottom={`3px solid ${theme.palette.primary.main}`}
        display="inline-block"
        minWidth="260px"
      >
        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          align="center"
          sx={{ mb: '5px' }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color="secondary" align="center" sx={{ mb: '15px' }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
