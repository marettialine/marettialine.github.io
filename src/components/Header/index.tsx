import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logo from '../../../public/logo.svg'
import { FilePdf } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Início">
          Início
        </NavLink>
        <NavLink to="/" title="Sobre mim">
          Sobre mim
        </NavLink>
        <NavLink to="/" title="Formação">
          Formação
        </NavLink>
        <NavLink to="/" title="Experiências">
          Experiências
        </NavLink>
        <NavLink to="/" title="Projetos">
          Projetos
        </NavLink>
        <NavLink to="/" title="Contato">
          Contato
        </NavLink>
        <NavLink to="/" title="Currículo" className="cv">
          <FilePdf size={20} weight="fill" /> Currículo
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
