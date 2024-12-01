import { Link } from 'react-router-dom';
import React from 'react';
import './Precios.css'
import { Header } from '../header/Header'
function Precios(){
    React.useEffect(()=>{
        window.scrollTo(0,0) // para que al cambiar de página se quede en la parte superior
    }) 
    return(
        <div className='container-fluid' id='containerPrecios'> {/* Inicio del container */}
            <Header/>
           
            <h3>Servicios / Precios</h3>
            <div className='row'> {/* Inicio de la fila */}
    
                <div className='col-12 col-md-6'>  {/* Inicio de columna 1 */}
                    <div className='card'>   {/* Inicio de la tarjeta 1 */}
                        <div className='card-header'> {/* Header de la tarjeta 1 */}
                            <h4 className='card-title'>Paquete Básico</h4>
                        </div> {/* Fin del header de la tarjeta 1 */}
                        <div className='card-body'> {/* Contenido de la tarjeta 1 */}
                            <div className='card-text'>

                                <p className='lead'><span>Incluye:</span><br />
                                1. De 3 a 5 secciones estáticas: Inicio, Servicios, Contacto, etc. <br />
                                2. Diseño responsivo: Perfecto para cualquier dispositivo.  <br />
                                3. Optimizacion básica para SEO: Mayor visibilidad en Google.   <br />
                                4. Metodo de Contacto Directo: Facilita la comunicación con el cliente.  <br />
                                </p>
                                <p className='lead'><span>Costo: </span> <br /> 25,000 colones</p> <br />
                                <p className='lead'><span>Metodos de Pago:</span><br /> Transferencia Bancaria <br />Simpe Movil <br />PayPal</p>
                                <p className='lead'><span>Pago en dos Partes:</span> <br /> 50% al iniciar el proyecto <br /> 50% al finalizar el proyecto</p>
                            </div>
                           
                        </div> {/* Fin del contenido de la tarjeta 1 */}
                        <div className='card-footer'> {/* Footer de la tarjeta 1 */}
                            <p id='plazo'>Plazo de entrega: 1 a 4 semanas (dependiendo de las funcionalidades)</p>
                        </div> {/* Fin del footer de la tarjeta 1 */}
                    </div> {/* Fin de la tarjeta 1 */}

                </div> {/* Fin de columna 1 */}

                <div className='col-12 col-md-6'> {/* Inicio de columna 2 */}
                    <div className='card'> {/* Inicio de la tarjeta 2 */}
                        <div className='card-header'> {/* Header de la tarjeta 2 */}
                            <h4 className='card-title'>Opciones Adicionales</h4>
                        </div> {/* Fin del header de la tarjeta 2 */}
                        <div className='card-body'> {/* Contenido de la tarjeta 2 */}
                            <p className='lead'><span>Mantenimiento continuo:</span> + 15,000 colones (cada mantenimiento) <br /><span>Botones para compartir en redes sociales:</span> +5,000 colones <br /><span>Optimización de imágenes:</span> +5,000 colones <br /><span>Diseño de logotipo básico:</span> +15,000 colones</p>
                        </div> {/* Fin del contenido de la tarjeta 2 */}
                        <div className='card-footer'> {/* Footer de la tarjeta 2 */}    
                            
                        </div> {/** Fin del footer de la tarjeta 2 */}

                    </div> {/* Fin de la tarjeta 2 */}
                </div> {/* Fin de columna 2 */}

            </div> {/* Fin de la fila */}

            <section id="descuentos" className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4 className='fw-bold'>¡Aprovecha Los Descuentos Especiales!</h4>
                    </div>
                    <div className='card-body'>
                        <p><span>Descuento por Pago Adelantado</span> <br />15% de descuento si pagas por adelantado. ¡Aprovecha esta oferta para obtener un descuento en tu inversión!</p>
                        <p><span>Descuento por Referencia</span><br />5% de descuento si me refieres a otro cliente.  ¡Ayúdame a crecer y recibe un descuento en tu próximo proyecto!</p>
                        <p><span>Descuento por inclusión en Portafolio</span><br />5% de descuento si permites que tu sitio web sea parte de mi portafolio.</p>
                        <p><span>Descuento por Servicio Adicional</span><br /> 5% de descuento por cada servicio adicional que agregues a tu paquete.</p>                
                        <p><span>Descuento por </span></p>
                    </div>
                    <div className='card-footer'>
                        <p className='lead fw-bold'>El Máximo descuento aplicable es del 25%</p>
                    </div>
                </div>
            </section>

            <aside>
                <h4 id='interest'>¿Interesado?</h4>
                
                    <a id='btn-what' href="https://wa.me/50683745485?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios" target="_blank">
                        <button className='btn btn-primary btn-sm fw-bold'>📞 WhatsApp: +506 83745485 </button>
                    </a>
                    <a id='btn-correo' href="mailto:pizarroteb06@outlook.com?subject=Interesado%20en%20tus%20servicios&body=Hola%2C%20quisiera%20más%20información%20sobre%20tus%20servicios">
                        <button className='btn btn-primary btn-sm fw-bold'>📧 Correo: pizarroteb@gmail.com </button>
                    </a>
                    <br />
                    <Link id='end-service' to='/contacto'>
                        <span className='lead'>¡Comienza ahora para llevar tu negocio al instante!</span>
                    </Link>
            </aside>

            {/* Fin del container */}
        </div> 

    )
}       

export { Precios };