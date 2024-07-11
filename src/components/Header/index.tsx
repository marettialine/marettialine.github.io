import { Link } from 'react-scroll'

import { HeaderContainer } from './styles'

import logo from '../../../public/logo.svg'
import { FilePdf } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <span>
          <img src={logo} alt="" />
        </span>
        <nav>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Início"
          >
            Início
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Sobre mim"
          >
            Sobre mim
          </Link>
          <Link
            activeClass="active"
            to="training"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Formação"
          >
            Formação
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Experiências"
          >
            Experiências
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Habilidades"
          >
            Habilidades
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Projetos"
          >
            Projetos
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title="Contato"
          >
            Contato
          </Link>
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
      </div>
    </HeaderContainer>
  )
}
