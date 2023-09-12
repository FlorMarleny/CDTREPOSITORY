import React from 'react'
import { BrowserRouter, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Alerta from "./components/Alerta/Alerta"
import Menu from "./components/Menu/Menu"
import Rutas from './routes/routes';
import { DarkModeProvider } from "./DarkModeContext" // Import the DarkModeProvider

function App() {
  return (
    <DarkModeProvider>
      {" "}
      <BrowserRouter>
        <Alerta />
        <Menu />
        <div className='app'>
          <Rutas />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
