import {SobreMi} from './../aboutMe/SobreMi'
import './Header.css'
function Header() {
  return (
    <>
        <header className="container-fluid">
          <div className='row'>
            <div className='col-12'>
             <ul>
               <a href="#">Inicio</a>
               <a href="#">Contactame</a>
               <a href="#">Servicios/Precios</a>
             </ul>    
            </div>
          </div>
        </header>
    </>
  )
}

export { Header };