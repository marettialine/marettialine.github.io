import { Element } from 'react-scroll'

import contactGirlPhone from '../../assets/girl_phone.jpg'

import { Container } from '../../layouts/DefaultLayout/styles'
import { Mark } from '../../styles/tags'

import { WhatsappLogo } from 'phosphor-react'
import { BsEnvelope } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { ContactContainer } from './styles'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useContext } from 'react'

export function Contact() {
  const pageText = useContext(LanguageContext).pageText.Contact

  return (
    <Element name="contact">
      <ContactContainer>
        <Container>
          <h2>
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
            {pageText.title[2]}
          </h2>
          <div className="container">
            <div className="text">
              <a>
                <p className="icon">
                  <WhatsappLogo size={30} />
                </p>
                +55 (35) 98712-1329
              </a>
              <a>
                <p className="icon">
                  <BsEnvelope size={30} />
                </p>
                alinesmaretti@gmail.com
              </a>
              <img src={contactGirlPhone} alt="" />
            </div>
            <form action="">
              <h3>{pageText.form.title}</h3>
              <input type="text" placeholder={pageText.form.name} />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder={pageText.form.subject} />
              <textarea placeholder={pageText.form.message}></textarea>
              <button>
                <IoIosSend size={20} /> Enviar
              </button>
            </form>
          </div>
        </Container>
      </ContactContainer>
    </Element>
  )
}
