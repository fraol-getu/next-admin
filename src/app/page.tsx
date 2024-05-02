

"use clent"

import { createContext } from "react";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material"

export default function Home() {
  
  const [theme, colorMode] = useMode()
  return (
    
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={""}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar/>
          </main>
        </div>
      </ThemeProvider>
     </ColorModeContext.Provider>
    
  );
}
