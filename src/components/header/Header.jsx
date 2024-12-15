import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <>
        <header className="container-fluid">
          <div className='row'>
            <div className='col-12'>
             <ul>
                <li><Link className='links' to='/'>Inicio</Link></li>
                <li><Link className='links' to='/precios'>Precios</Link></li>
                <li><Link className='links' to='/contacto'>Contacto</Link></li>
              </ul>
            </div>
          </div>
        </header>
    </>
  )
}

export { Header };