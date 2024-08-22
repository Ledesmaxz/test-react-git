import '../styles/Header.css'

import Logo from '../assets/logo.png';
import carrito from '../assets/preview.png'
import search from '../assets/search.png'

export default function Header() {
  return (
    <header className='header'>
        <img src={Logo} alt='Logo' className='Logo'/> 
        <p className='header__se'>
            <input type="Busqueda" className='header__search'/>
            <img src={search} alt='Search' className='Search'/>
        </p>
        <img src={carrito} alt='Carrito' className='Logo'/> 
    </header>
  )
}
