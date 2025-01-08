import { Link } from 'react-scroll'
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'

import { HeaderContainer } from './styles'

import logo from '../../../public/logo.svg'

import { FilePdf } from 'phosphor-react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { ptBR } from '../../language/pt-BR'
import { enUS } from '../../language/en-US'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'

export function Header() {
  const { language, setLanguage, setPageText, pageText } =
    useContext(LanguageContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target

    setLanguage(value)

    localStorage.setItem('language@1.0', value)

    setPageText(value === 'pt-BR' ? ptBR : enUS)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <HeaderContainer>
      <div className="container">
        <span>
          <img src={logo} alt="" />
        </span>

        <p>
          <a
            href={
              language === 'pt-BR'
                ? 'https://marettialine.github.io/CV_ptBR.pdf'
                : 'https://marettialine.github.io/CV_en.pdf'
            }
            title="Currículo"
            className="cv mobile"
            target="_blank"
            rel="noreferrer"
          >
            <FilePdf size={20} weight="fill" /> {pageText.Header[6]}
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile menu-btn"
          >
            {!isMenuOpen ? <HiOutlineMenu size={35} /> : <FaTimes size={35} />}
          </button>
        </p>

        <nav className={isMenuOpen ? 'visible' : ''} ref={menuRef}>
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
