import React from 'react'
import './css/navmenu.css'
import './css/navmenu2.css'
import { Link } from 'react-scroll'

const NavMenu = () => {
  return (
    <div className='container-3'>
      <div className="container-3-navegacao">
        <ul>
          <li> 
            <Link to="QuemSomos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >
              Sobre Nós
            </Link>
            </li>
          <li><Link to="Sistema"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >
              Sistema
            </Link></li>

          <li><Link to="Resultados"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >
              Resultados
            </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavMenu