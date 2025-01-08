import { InstagramLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa6'

import { SocialsContainer } from './styles'

interface SocialsProps {
  vertical?: boolean
  footer?: boolean
}

export function Socials({ vertical = false, footer = false }: SocialsProps) {
  const iconSize = footer ? 23 : 28

  return (
    <SocialsContainer
      className={vertical ? 'vertical' : footer ? 'footer' : ''}
    >
      <a
        href="https://www.instagram.com/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramLogo size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo size={iconSize} />
      </a>
      {/* <a href="" target="_blank">
        <FacebookLogo size={iconSize} />
      </a> */}
      <a href="https://t.me/marettialine" target="_blank" rel="noreferrer">
        <TelegramLogo size={iconSize} />
      </a>
      <a
        href="https://github.com/marettialine/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={iconSize} />
      </a>
    </SocialsContainer>
  )
}
