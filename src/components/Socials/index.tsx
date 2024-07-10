import { InstagramLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa6'

import { SocialsContainer } from './styles'

interface SocialsProps {
  vertical?: boolean
}

export function Socials({ vertical = false }: SocialsProps) {
  return (
    <SocialsContainer className={vertical ? 'vertical' : ''}>
      <a
        href="https://www.instagram.com/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramLogo size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo size={28} />
      </a>
      {/* <a href="" target="_blank">
        <FacebookLogo size={28} />
      </a> */}
      <a href="https://t.me/marettialine" target="_blank" rel="noreferrer">
        <TelegramLogo size={28} />
      </a>
      <a
        href="https://github.com/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={28} />
      </a>
    </SocialsContainer>
  )
}
