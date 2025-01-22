import { Element } from 'react-scroll'

import htmlIcon from '../../assets/icon_html.png'
import reactIcon from '../../assets/icon_react.png'
import javascriptIcon from '../../assets/icon_javascript.png'
import typescriptIcon from '../../assets/icon_typescript.png'
import styledComponentsIcon from '../../assets/icon_styled_components.png'
import tailwindIcon from '../../assets/icon_tailwind.png'
import phpIcon from '../../assets/icon_php.png'
import nodeIcon from '../../assets/icon_node.png'
import pythonIcon from '../../assets/icon_python.png'
import javaIcon from '../../assets/icon_java.png'
import powerAutomateIcon from '../../assets/icon_power_automate.png'
import figmaIcon from '../../assets/icon_figma.png'

import { ProgrammingLanguagesContainer, TechnologiesContainer } from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'
import { HorizontalScroll } from '../../styles/animations'
import { Mark } from '../../styles/tags'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useContext } from 'react'

export function Technologies() {
  const pageText = useContext(LanguageContext).pageText.Technologies

  return (
    <Element name="technologies">
      <TechnologiesContainer>
        <Container>
          <h2>
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
          </h2>

          <ProgrammingLanguagesContainer>
            <div className="container">
              <HorizontalScroll>
                <li>
                  <img src={htmlIcon} alt="" />
                  HTML
                </li>
                <li>
                  <img src={reactIcon} alt="" />
                  React
                </li>
                <li>
                  <img src={javascriptIcon} alt="" />
                  Javascript
                </li>
                <li>
                  <img src={typescriptIcon} alt="" />
                  Typescript
                </li>
                <li>
                  <img src={styledComponentsIcon} alt="" />
                  Styled Components
                </li>
                <li>
                  <img src={tailwindIcon} alt="" />
                  Tailwind
                </li>
                <li>
                  <img src={nodeIcon} alt="" />
                  Node
                </li>
                <li>
                  <img src={phpIcon} alt="" />
                  PHP
                </li>
                <li>
                  <img src={pythonIcon} alt="" />
                  Python
                </li>
                <li>
                  <img src={javaIcon} alt="" />
                  Java
                </li>
                <li>
                  <img src={powerAutomateIcon} alt="" />
                  Power Automate
                </li>
                <li>
                  <img src={figmaIcon} alt="" />
                  Figma
                </li>
              </HorizontalScroll>
              <HorizontalScroll>
                <li>
                  <img src={htmlIcon} alt="" />
                  HTML
                </li>
                <li>
                  <img src={reactIcon} alt="" />
                  React
                </li>
                <li>
                  <img src={javascriptIcon} alt="" />
                  Javascript
                </li>
                <li>
                  <img src={typescriptIcon} alt="" />
                  Typescript
                </li>
                <li>
                  <img src={styledComponentsIcon} alt="" />
                  Styled Components
                </li>
                <li>
                  <img src={tailwindIcon} alt="" />
                  Tailwind
                </li>
                <li>
                  <img src={nodeIcon} alt="" />
                  Node
                </li>
                <li>
                  <img src={phpIcon} alt="" />
                  PHP
                </li>
                <li>
                  <img src={pythonIcon} alt="" />
                  Python
                </li>
                <li>
                  <img src={javaIcon} alt="" />
                  Java
                </li>
                <li>
                  <img src={powerAutomateIcon} alt="" />
                  Power Automate
                </li>
                <li>
                  <img src={figmaIcon} alt="" />
                  Figma
                </li>
              </HorizontalScroll>
            </div>
          </ProgrammingLanguagesContainer>
        </Container>
      </TechnologiesContainer>
    </Element>
  )
}
