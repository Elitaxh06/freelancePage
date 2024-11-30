import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <>
        <header className="container-fluid">
          <div className='row'>
            <div className='col-12'>
             <ul>
                <Link className='links' to='/'>
                    <li>Inicio</li>
                </Link>
                <Link className='links' to='/precios'>
                  <li>Precios</li>
                </Link>
                <Link className='links' to='/contacto'>
                  <li>Contacto</li>
                </Link>
              </ul>
            </div>
          </div>
        </header>
    </>
  )
}

export { Header };