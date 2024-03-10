import React from 'react';
import { useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function IconBox({ icon, to }) {
  const { palette } = useTheme();
  return (
    // <a href={to} target="_blank" rel="noopener noreferrer">
    <Link to={to} target="_blank" rel="noopener noreferrer">
      <Box
        component={icon}
        sx={{
          color: palette.primary.main,
          fontSize: '30px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            // bgcolor: theme.palette.background.paper,
            scale: '1.10',
            color: palette.secondary.dark,
          },
        }}
      />
    </Link>
    // </a>
  );
}

export default IconBox;
