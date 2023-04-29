import * as React from "react";
import MyRoutes from "src/scenes/global/Routes";
import { ColorModeContext, useMode } from "src/theme";
import { Box, CssBaseline } from "@mui/material";
import MyAppBar from "src/scenes/global/Appbar";
import MainContentContainer from "src/scenes/global/MainContent";
import MySidebar from "src/scenes/global/sidebar/Sidebar";
import { MySidebarProvider } from "src/scenes/global/sidebar/SidebarContext";
import { ThemeProvider } from "@mui/material/styles";


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MySidebarProvider>
          
          <div id="app" style={{ height: "100vh" }}>
            <Box sx={{ display: 'flex' }}>
              <MySidebar />
              <MyAppBar />
              <MainContentContainer>
                <MyRoutes />
              </MainContentContainer>
            </Box>
          </div>
          
        </MySidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
