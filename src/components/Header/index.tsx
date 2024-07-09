import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logo from '../../../public/logo.svg'

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
      </nav>
    </HeaderContainer>
  )
}
