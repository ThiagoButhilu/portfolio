import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'

import resume from '../../assets/THIAGO_ARAUJO_RODRIGUES.docx'

function Header() {
    return (
        <div className="header-fixed header_position container">
            <Router>
                
                    <HashLink className='logo'>
                        <span>Thiago Araujo</span>
                    </HashLink>
                <nav>
                    <NavHashLink>
                        Inicio
                    </NavHashLink>
                    <NavHashLink>
                        Sobre mim
                    </NavHashLink>
                    <NavHashLink>
                        Projetos
                    </NavHashLink>
                    <NavHashLink>
                        Contato
                    </NavHashLink>
                    <a href={resume} download className='button'>
                        Curriculo
                    </a>
                </nav>
            </Router>
        </div>
    )
}

export default Header;