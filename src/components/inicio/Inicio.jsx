import React from 'react'
import { Header } from './../header/Header'
import { SobreMi } from './../aboutMe/SobreMi'
import { Servicios } from './../servicios/Servicios'
import { Contratarme } from '../Contratarme/Contratarme'
function Inicio() {
  return (
    <>
      <Header/>
      <SobreMi/>
      <Contratarme/>
      <Servicios/>
      <br />
    </>
  )
}

export { Inicio };