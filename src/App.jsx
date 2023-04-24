import * as React from "react";
import MySidebar from "./scenes/global/sidebar/Sidebar";
import MyRoutes from "./scenes/global/routes";
import ButtonAppBar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
          <MySidebar />

          <div
            className="content-wrapper"
            style={{ height: "100vh", width: "100%" }}
          >
            <ButtonAppBar />
            <MyRoutes />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
