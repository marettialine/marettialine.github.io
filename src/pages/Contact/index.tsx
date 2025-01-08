import { Element } from 'react-scroll'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import emailjs from '@emailjs/browser'

import { throwToast } from '../../utils/Toast'
import { LanguageContext } from '../../contexts/LanguageContext'

import contactGirlPhone from '../../assets/girl_phone.png'

import { Container } from '../../layouts/DefaultLayout/styles'
import { Mark } from '../../styles/tags'
import { ContactContainer } from './styles'

import { WhatsappLogo } from 'phosphor-react'
import { BsEnvelope } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'

export function Contact() {
  const pageText = useContext(LanguageContext).pageText.Contact

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()

    if (name === '' && email === '' && subject === '' && message === '') {
      console.log('entrou')
    } else {
      const params = {
        name,
        email,
        subject,
        message,
      }

      emailjs
        .send(
          'service_45e0zko',
          'template_jeydjwe',
          params,
          'qKfKdyvMKoCuE5aZG',
        )
        .then(
          () => {
            throwToast.success(
              'Sua mensagem foi enviada com sucesso! Aguarde um e-mail de retorno.',
            )
          },
          (error) => {
            throwToast.error(
              'Ocorreu algum erro ao enviar o seu e-mail. Por favor, tente novamente!',
            )

            console.log('Ocorreu um erro ao enviar o email: ', error)
          },
        )
    }
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleOnChangeSubject(e: ChangeEvent<HTMLInputElement>) {
    setSubject(e.target.value)
  }

  function handleOnChangeMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value)
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
              <input
                type="text"
                placeholder={pageText.form.name}
                value={name}
                onChange={handleOnChangeName}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleOnChangeEmail}
                required
              />
              <input
                type="text"
                placeholder={pageText.form.subject}
                value={subject}
                onChange={handleOnChangeSubject}
                required
              />
              <textarea
                placeholder={pageText.form.message}
                value={message}
                onChange={handleOnChangeMessage}
                required
              ></textarea>
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
