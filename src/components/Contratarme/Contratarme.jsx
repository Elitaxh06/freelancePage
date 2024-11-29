import './Contratarme.css'
import imagen1 from '../../assets/img/foto1.jpeg'
function Contratarme() {
  return (
      <section className='container marketing mt-5'>
        <div className='container my-5'>
          <div className='row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 border shadow-lg'>
          <h2>Lleva tu Negocio al Siguiente Nivel</h2>
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h4 className=''>Transformo ideas en experiencias digitales que impulsan tu negocio</h4>
              <p className="lead">Mi enfoque en el diseño y desarrollo de sitios web personalizados está basado en ofrecer soluciones eficientes y visualmente atractivas que se adaptan a las necesidades únicas de cada negocio. Con experiencia técnica y atención a los detalles, me aseguro de que tu marca destaque en un mercado competitivo. Creo soluciones digitales hechas a medida, diseñadas para atraer a tus clientes y optimizar tu presencia en línea, asegurando que cada proyecto sea funcional y efectivo.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href="#nosotros">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Comienza Ahora</button>
                </a>
              </div>         
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img src={imagen1} className="img-fluid" alt="Foto de setup" />
            </div>
          </div>
        </div>
      </section>
  )
}

export { Contratarme };