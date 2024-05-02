"use client"

import { useState, useMemo } from "react";
import { createContext } from "react"; // Import from react, not vm
import {createTheme} from "@mui/material/styles"
// interface Token {
//   gray: { [key: number]: string }; // Use a numeric key type for shades
//   primary: { [key: number]: string };
//   greenAccent: { [key: number]: string };
//   redAccent: { [key: number]: string };
//   blueAccent: { [key: number]: string };
// }

// color design token
export const tokens = (mode: string) => {
  if (mode === "dark") { 
    return {
      gray: 
      {
      100:  "#e0e0e0",
       200: "#c2c2c2",
       300: "#a3a3a3",
        400:"#858585",
        500:"#666666",
        600:"#525252",
        700:"#3d3d3d",
        800:"#292929",
       900:  "#141414",
      },
      primary: {
       100: "#d0d1d5",
       200: "#a1a4ab",
        300: "#727681",
        400: "#434957",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800:"#080b12",
        900: "#040509",
      },
      greenAccent: {
       100: "#dbf5ee",
        200:"#b7ebde",
        300:"#94e2cd",
        400:"#70d8bd",
        500:"#4cceac",
        600:"#3da58a",
        700:"#2e7c67",
        800:"#1e5245",
       900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200:"#f1b9b7",
        300:"#e99592",
        400: "#e2726e",
        500:"#db4f4a",
        600:"#af3f3b",
        700:"#832f2c",
        800:"#58201e",
        900:"#2c100f",
      },
      blueAccent: {
        100:"#e1e2fe",
        200:"#c3c6fd",
        300:"#a4a9fc",
        400:"#868dfb",
        500:"#6870fa",
        600:"#535ac8",
        700:"#3e4396",
        800:"#2a2d64",
        900:"#151632",
      },
    };
  } else {
     return {
      gray: 
      {
      100:  "#e0e0e0",
       200:  "#141414",
       300: "#a3a3a3",
       400: "#c2c2c2",
        500:"#292929",
        600:"#3d3d3d",
        700:"#525252",
        800:"#666666",
        900:"#858585",
      },
      primary: {
       100: "#a1a4ab",
       200: "#d0d1d5",
        300: "#040509",
        400:"#080b12",
        500: "#0c101b",
        600: "#101624",
        700: "#141b2d",
        800: "#434957",
        900: "#727681",
      },
      greenAccent: {
       100: "#0f2922",
       200: "#dbf5ee",
        300:"#1e5245",
        400:"#2e7c67",
        500:"#3da58a",
        600:"#4cceac",
        700:"#70d8bd",
        800:"#94e2cd",
        900:"#b7ebde",
      },
      redAccent: {
        100:"#2c100f",
        200:"#58201e",
        300:"#832f2c",
        400:"#af3f3b",
        500:"#db4f4a",
        600: "#e2726e",
        700:"#e99592",
        800:"#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100:"#151632",
        200:"#2a2d64",
        300:"#3e4396",
        400:"#535ac8",
        500:"#6870fa",
        600:"#868dfb",
        700:"#a4a9fc",
        800:"#c3c6fd",
        900:"#e1e2fe",
      },
    };

  }
};

// mui theme settings


export const themeSettings = (mode : any) => {
  const colors = tokens(mode);

  return {
  palette : {
    mode : mode,
    ...(mode === "dark" ? {
    primary :{
      main : colors.primary[500]
    },
    secondary: {
      main: colors.greenAccent[500]
    },
    neutral : {
      dark: colors.gray[700],
      main: colors.gray[500],
      light: colors.gray[100]
    },
    background : {
      default:colors.primary[500]
    }
    
    } : {
      primary :{
        main : colors.primary[500]
      },
      secondary: {
        main: colors.greenAccent[500]
      },
      neutral : {
        dark: colors.gray[700],
        main: colors.gray[500],
        light: colors.gray[100]
      },
      background : {
        default: "#fcfcfc",
      },
    }

  )},

  typography : {
   fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
   fontSize : 12,
   h1 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 40,
   },
   h2 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 32,
   },
   h3 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 24,
   },
   h4 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 20,
   },
   h5 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 16,
   },
   h6 : {
    fontFamily : ["Source Sans Pro", "sans-serif"].join(","),
    fontSize : 14,
   },
  }


  }
}


// context for color mode 

interface ColorContextValue {

  toggleColorMode: () => void;
  
}
export  const ColorModeContext = createContext <ColorContextValue>({
  toggleColorMode:  () => {},
})
export const useMode = () => {
  const [mode, setMode] = useState<'dark' | 'light'>("dark")
 
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => 
      setMode(mode === "light" ? "dark" : "light")  
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return  [theme, colorMode]
}
 