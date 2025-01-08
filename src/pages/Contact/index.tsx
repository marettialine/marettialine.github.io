import { Element } from 'react-scroll'

import contactGirlPhone from '../../assets/girl_phone.png'

import { Container } from '../../layouts/DefaultLayout/styles'
import { Mark } from '../../styles/tags'

import { WhatsappLogo } from 'phosphor-react'
import { BsEnvelope } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { ContactContainer } from './styles'
import { LanguageContext } from '../../contexts/LanguageContext'
import { FormEvent, useContext } from 'react'
import { throwToast } from '../../utils/Toast'

export function Contact() {
  const pageText = useContext(LanguageContext).pageText.Contact

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()

    throwToast.info(
      'O envio de uma mensagem ainda está sendo desenvolvido, por favor utilize o e-mail ou telefone para entrar em contato!',
    )
  }

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
              <div className="links">
                <a
                  href="https://wa.me/5535987121329?text=Olá,%20acabei%20de%20ver%20o%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="icon">
                    <WhatsappLogo size={30} />
                  </p>
                  <span>+55 (35) 98712-1329</span>
                </a>
                <a
                  href="mailto:alinesmaretti@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="icon">
                    <BsEnvelope size={30} />
                  </p>
                  <span>alinesmaretti@gmail.com</span>
                </a>
              </div>
              <img src={contactGirlPhone} alt="" />
            </div>
            <form onSubmit={handleOnSubmit}>
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
