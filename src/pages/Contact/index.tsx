import { Element } from 'react-scroll'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import { throwToast } from '../../utils/Toast'
import { LanguageContext } from '../../contexts/LanguageContext'

import contactGirlPhone from '../../assets/girl_phone.png'

import { Container } from '../../layouts/DefaultLayout/styles'
import { Mark } from '../../styles/tags'
import { ContactContainer } from './styles'

import { WhatsappLogo } from 'phosphor-react'
import { BsEnvelope } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { recaptcha } from '../../recaptcha/config'

export function Contact() {
  const pageText = useContext(LanguageContext).pageText.Contact

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()

    if (!recaptchaValue) {
      throwToast.error('Por favor, complete o reCAPTCHA!')
      return
    }

    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      const params = {
        name,
        email,
        subject,
        message,
      }

      const emailPromise = emailjs.send(
        'service_45e0zko',
        'template_jeydjwe',
        params,
        'qKfKdyvMKoCuE5aZG',
      )

      throwToast.promise(
        emailPromise,
        'Enviando sua mensagem...',
        'Sua mensagem foi enviada com sucesso! Aguarde um e-mail de retorno.',
        'Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente!',
      )

      emailPromise
        .then(() => {
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
        })
        .catch((error) => {
          console.error('Erro ao enviar mensagem:', error)
        })
    } else {
      throwToast.error(
        'Você precisa preencher todos os campos pra enviar sua mensagem!',
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
              {name !== '' &&
                email !== '' &&
                subject !== '' &&
                message !== '' && (
                  <div className="recaptcha">
                    <ReCAPTCHA
                      sitekey={recaptcha.site}
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                )}

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
