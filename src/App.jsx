import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from '@/theme';
import MyAppBar from '@/scenes/global/Appbar';
import GithubFooter from '@/scenes/global/GithubFooter';
import MyRoutes from '@/scenes/global/Routes';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box id="app" sx={{ height: '100vh' }}>
          <MyAppBar />
          <MyRoutes />
          <GithubFooter />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
