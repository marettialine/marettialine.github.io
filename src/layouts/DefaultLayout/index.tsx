import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { Container, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </LayoutContainer>
  )
}
