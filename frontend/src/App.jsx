import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Atendee/Main'
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: { main: "#fff" },      
    secondary: { main: "#FFC107" }, 
    text: {
      primary: "#000",
      logoLite: "#7e7e7eff", 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "normal",
          padding: "6px 16px",
        },

        containedPrimary: {
           fontWeight: "bold",
          backgroundColor: "#FFC107", 
          color: "#000",
          "&:hover": {
            backgroundColor: "#e6ac00",
          },
        },
        containedSecondary: {
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        },
      },
    },
  },
});


function App() {

  return (
    <>
     <ThemeProvider theme={theme}>

          <Main/>
     </ThemeProvider>


    </>
  )
}

export default App
