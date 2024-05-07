"use client"


import Dashboard from "./dashboard/page";
import SideBar from "./scenes/global/SideBar";
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
          <SideBar/>
          <main className="content">
            <Topbar/>
           <Dashboard/>
          </main>
        </div>
      </ThemeProvider>
     </ColorModeContext.Provider>
    
    
  );
}
