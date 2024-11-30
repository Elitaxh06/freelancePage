import './SobreMi.css'

function SobreMi() {
  return (
    <div className='container-fluid' id='containerMi'>
      <section className='row'>
        <div className='col-12'>
          <h1><span id='hola'>Hola👋</span> <br/>Soy Esteban, un desarrollador web junior y estudiante universitario con pasión por crear soluciones digitales efectivas. Trabajo como freelance, especializado en el diseño de sitios web modernos, funcionales y responsivos. Mi enfoque está en optimizar la experiencia del usuario, asegurando que cada proyecto se adapte a las necesidades del negocio y permita alcanzar su máximo potencial en línea.</h1>

          <h5>Redes Sociales</h5>
          <div id='linkkMi'>
            <ul>
              <a target='_blank' href="https://www.instagram.com/esteban_pizarro25/"><li id='instagram'>Instagram</li></a>
              <a target='_blank' href="https://github.com/elitaxh06"><li id='github'>Github</li></a>
              <a target='_blank' href="https://www.linkedin.com/in/esteban-pizarro-5897362a9/"><li id='linkedin'>Linkedin</li></a>
            </ul>
            <a href="https://elitaxh06.github.io/elitaxh-portfolio/" target='_blank'>
              <button className='btn'>Mi Portafolio</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export { SobreMi };