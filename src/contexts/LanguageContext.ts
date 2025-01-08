import { createContext } from 'react'
import { ptBR } from '../language/pt-BR/pt-BR'
import { enUS } from '../language/en-US/en-US'

export interface PageTextType {
  Header: string[]
  Home: {
    title: string
    description: string
  }
  About: {
    title: string[]
    description: string[]
    numbers: string[]
  }
  Education: {
    title: string[]
    list: {
      english: string[]
      technician: string[]
      engineering: string[]
      rocketseat: string[]
    }
  }
  Technologies: {
    title: string[]
  }
  Contact: {
    title: string[]
    form: {
      title: string
      name: string
      subject: string
      message: string
    }
  }
  Footer: string
}

interface LanguageContextType {
  pageText: PageTextType
  language: string
  setLanguage: (language: string) => void
  setPageText: (text: typeof ptBR | typeof enUS) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  pageText: ptBR,
  language: localStorage.getItem('language@1.0') || 'pt-BR',
  setLanguage: () => {},
  setPageText: () => {},
})
