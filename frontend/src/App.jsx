import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Atendee/Main'
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#fff" },
    text: { primary: "#000" },
    text: { logoLite: "#7e7e7eff" },
  secondary: {main:"#FFC107"}
  },
  typography: {
    fontFamily: "Arial, sans-serif",
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
