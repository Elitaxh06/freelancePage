import {SobreMi} from './../aboutMe/SobreMi'
import './Header.css'
function Header() {
  return (
    <>
        <header className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
              </a>
              <a className="navbar-brand" href="index.html">VoltMark</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="index.html">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="productos.html">Servicios/Precios</a></li>
                  <li className="nav-item"><a className="nav-link" href="#nosotros">Contacto</a></li>
                  <li className="nav-item"><a className="nav-link" href="#formulario">Sobre Mí</a></li>
                </ul>
              </div>
            </div>
          </header>
        <SobreMi/>
    </>
  )
}

export { Header };