"use client"

import Dashboard from "./scenes/Dashboard/dashboard";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material"

export default function Home() {
  
  const [theme, colorMode]= useMode()
   return (
     <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar/>
           <Dashboard />
          </main>
        </div>
      </ThemeProvider>
     </ColorModeContext.Provider>
    
    
  );
}
