import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

function HeaderLink({ text, link }) {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      position="relative"
      key={`${text}_${link}`}
      component={Link}
      to={link}
      sx={{
        '&:hover::before': {
          position: 'absolute',
          content: '""',
          top: '-5px',
          backgroundColor: palette.primary.main,
          width: '5px',
          height: '5px',
          borderRadius: '100%',
          display: 'inline-flex',
          left: 'calc(50% - 2.5px)',
        },
        display: {
          xs: 'none',
          md: 'flex',
        },
        textDecoration: 'none',
      }}
    >
      <Typography variant="button" sx={{ color: palette.primary.main }}>
        {text}
      </Typography>
    </Box>
  );
}
export default HeaderLink;
