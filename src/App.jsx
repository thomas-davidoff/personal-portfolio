import * as React from "react";
import MyRoutes from "./scenes/global/Routes";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import MyAppBar from "./scenes/global/appBar/Appbar";
import MainContentContainer from "./scenes/global/mainContainer/MainContent";
import MySidebar from "./scenes/global/sideBar/Sidebar";
import { MySidebarProvider } from "./scenes/global/sideBar/SidebarContext";

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
