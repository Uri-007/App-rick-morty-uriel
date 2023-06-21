import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
        <div className='container-fluid'>
            <div className='collapse navbar-collapse'>
            <Link to='/' className='navbar-brand'><h1>Logo</h1></Link>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
                <Link className='nav-link active' to='/'>Inicio</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' to='/nosotros'>Nosotros</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' to='/contacto'>Contacto</Link>
            </li>
        </ul>
            </div>
        
        </div>
    </nav>
  )
}
 export default Navbar;