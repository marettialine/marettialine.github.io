import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { LanguageContext, PageTextType } from './contexts/LanguageContext'
import { useState } from 'react'
import { ptBR } from './language/pt-BR/pt-BR'
import { enUS } from './language/en-US/en-US'

export function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('language@1.0') || 'pt-BR',
  )

  const [pageText, setPageText] = useState<PageTextType>(
    language === 'pt-BR' ? ptBR : enUS,
  )

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LanguageContext.Provider
          value={{ language, setLanguage, pageText, setPageText }}
        >
          <Router />
        </LanguageContext.Provider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
