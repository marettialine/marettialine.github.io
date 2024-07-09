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
        <a
          href="https://marettialine.github.io/CV.pdf"
          title="Currículo"
          className="cv"
          target="_blank"
          rel="noreferrer"
        >
          <FilePdf size={20} weight="fill" /> Currículo
        </a>
      </nav>
    </HeaderContainer>
  )
}
