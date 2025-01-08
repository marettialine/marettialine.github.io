import { ReactTyped } from 'react-typed'
import { Element } from 'react-scroll'

import { About } from '../About'
import { Projects } from '../Projects'
import { Technologies } from '../Technologies'
import { Contact } from '../Contact'
import { Socials } from '../../components/Socials'

import girlCoding from '../../assets/girl_coding.svg'

import { Mark } from '../../styles/tags'
import { FooterContainer, HomeContainer } from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { Qualifications } from '../Qualifications'

export function Home() {
  const pageText = useContext(LanguageContext).pageText

  return (
    <>
      <Element name="home">
        <HomeContainer>
          <div className="hero">
            <main>
              <h1>
                {pageText.Home.title}
                <Mark>
                  <ReactTyped strings={['Aline...']} typeSpeed={150} loop />
                </Mark>
              </h1>
              <h2>Web Developer Full-Stack</h2>
              <p>{pageText.Home.description}</p>
              <Socials />
            </main>
            <img src={girlCoding} alt="" />
          </div>
        </HomeContainer>
      </Element>

      <About />

      <Qualifications />

      <Projects />

      <Technologies />

      <Contact />

      <Element name="footer">
        <FooterContainer>
          <Container>
            <footer>
              <div>
                © {new Date().getFullYear()} Aline Maretti. {pageText.Footer}
              </div>
              <Socials footer />
            </footer>
          </Container>
        </FooterContainer>
      </Element>
    </>
  )
}
