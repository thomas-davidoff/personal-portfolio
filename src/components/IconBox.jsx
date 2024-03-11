import React from 'react';
import { useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function IconBox({ icon, to }) {
  const { palette } = useTheme();
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      <Box
        component={icon}
        sx={{
          color: palette.primary.main,
          fontSize: '30px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            scale: '1.05',
            color: palette.primary.light,
          },
        }}
      />
    </Link>
    // </a>
  );
}

export default IconBox;
