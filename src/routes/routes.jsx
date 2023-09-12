import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Nosotros from "../pages/nosotros/Nosotros"
import Programas from "../pages/programas/Programas"
import Vermas from "../pages/vermas/Vermas"
import Contacto from "../pages/contacto/Contacto"
import NotFoundPage from "../pages/404/NotFoundPage"

const routes = () => {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/programas" element={<Programas />} />
      <Route path="/:subprogramaId" element={<Vermas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
  )
}

export default routes
