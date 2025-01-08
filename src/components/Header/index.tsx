import { Link } from 'react-scroll'
import { ChangeEvent, useContext } from 'react'

import { HeaderContainer } from './styles'

import logo from '../../../public/logo.svg'

import { FilePdf } from 'phosphor-react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { ptBR } from '../../language/pt-BR'
import { enUS } from '../../language/en-US'

export function Header() {
  const { language, setLanguage, setPageText, pageText } =
    useContext(LanguageContext)

  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target

    setLanguage(value)

    localStorage.setItem('language@1.0', value)

    setPageText(value === 'pt-BR' ? ptBR : enUS)
  }

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
            offset={-200}
            duration={500}
            title={pageText.Header[0]}
          >
            {pageText.Header[0]}
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            title={pageText.Header[1]}
          >
            {pageText.Header[1]}
          </Link>
          <Link
            activeClass="active"
            to="qualifications"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            title={pageText.Header[2]}
          >
            {pageText.Header[2]}
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            title={pageText.Header[3]}
          >
            {pageText.Header[3]}
          </Link>
          <Link
            activeClass="active"
            to="technologies"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            title={pageText.Header[4]}
          >
            {pageText.Header[4]}
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
            title={pageText.Header[5]}
          >
            {pageText.Header[5]}
          </Link>
          <a
            href={
              language === 'pt-BR'
                ? 'https://marettialine.github.io/CV_ptBR.pdf'
                : 'https://marettialine.github.io/CV_en.pdf'
            }
            title="Currículo"
            className="cv"
            target="_blank"
            rel="noreferrer"
          >
            <FilePdf size={20} weight="fill" /> {pageText.Header[6]}
          </a>
          <select value={language} onChange={handleOnChange}>
            <option value={'pt-BR'}>pt-BR</option>
            <option value={'en'}>en-US</option>
          </select>
        </nav>
      </div>
    </HeaderContainer>
  )
}
