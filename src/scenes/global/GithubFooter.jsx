import { Box, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function GithubFooter() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      position="fixed"
      bottom="0px"
      right="0px"
      alignContent="center"
      justifyContent="center"
      padding={theme.spacing(2)}
    >
      <a
        href="https://github.com/thomas-davidoff/personal-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to GitHub"
      >
        <Box
          component={GitHubIcon}
          sx={{
            color: theme.palette.primary.main,
            fontSize: '40px',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              scale: '1.10',
              color: theme.palette.secondary.dark,
              mb: '5px',
            },
          }}
        />
      </a>
    </Box>
  );
}
