import React from 'react';
import { Link } from 'react-router-dom';

import './Servicio.css'

function Servicios(){
    return(
        <div id='services' className='container-fluid'>
            <h1>Lo que Puedo Hacer Por Ti</h1>
            <h5 id='solutions'>Soluciones digitales diseñadas para impulsar tu negocio y mejorar tu presencia online.</h5>
            <ul>
                <li className='li'>
                    <p id="design">1. Diseño Web Personalizado</p>
                    <span>🌐 Descripción:</span> Creación de sitios web modernos y funcionales que se adaptan completamente a las necesidades de tu negocio. Trabajo en estrecha colaboración contigo para enteder tu visión y garantizar que tu página refleje la identidad de tu marca.
                </li>
                <br />
                <li className='li'> 
                    <p id="opt">2. Optimización para Motores de Búsqueda (SEO)</p>
                    <span>📈 Descripción:</span> Me aseguro de que tu sitio web esté optimizado para los motores de búsqueda, mejorando su visibilidad en Google y otros buscadores. Esto incrementa tus oportunidades de ser encontrado por los clientes potenciales.
                </li>
                <br />
                <li className='li'>
                    <p id="responsive">3. Diseño Responsivo</p>
                    <span>💻 Descripción:</span> Garantizo que tu sitio web funcione perfectamente en todos los dispositivos, desde móviles hasta computadoras de escritorio. Esto asegura una experiencia de usuario fluida y sin problemas, sin importar el dispositivo.
                </li>
            </ul>
            <div id='rowButtons' className='row'>
                <div className='buttons col-12 col-md-6'>
                    <Link to='/precios'>
                  <button id='moreInfo' type="button" className="btn btn-primary btn-md px-4 fw-bold">Mas Información</button>
                        
                    </Link>
                </div>
                <div className="buttons col-12 col-md-6">
                    <Link to='/contacto'>
                  <button id='moreInfo' type="button" className="btn btn-primary btn-md px-4 fw-bold">Contactame</button>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Servicios };