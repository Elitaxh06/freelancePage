import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from '../components/inicio/Inicio'
import { Precios } from '../components/Precios/Precios'
import { Contacto } from '../components/contacto/Contacto'
export default function AppRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/precios" element={<Precios/>} />
            <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </>
  )
}
