import { ProgrammingLanguagesContainer } from './styles'

import reactIcon from '../../assets/icon_react.png'
import javascriptIcon from '../../assets/icon_javascript.png'
import typescriptIcon from '../../assets/icon_typescript.png'
import styledComponentsIcon from '../../assets/icon_styled_components.png'
import tailwindIcon from '../../assets/icon_tailwind.png'
import phpIcon from '../../assets/icon_php.png'
import nodeIcon from '../../assets/icon_node.png'
import pythonIcon from '../../assets/icon_python.png'
import javaIcon from '../../assets/icon_java.png'
import figmaIcon from '../../assets/icon_figma.png'
import { HorizontalScroll } from '../../styles/animations'

// import nodeIcon from '../../assets/icon_node.png'

export function ProgrammingLanguages() {
  return (
    <ProgrammingLanguagesContainer>
      <h2>Technologies</h2>

      <ul>
        <HorizontalScroll>
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
            <img src={figmaIcon} alt="" />
            Figma
          </li>
        </HorizontalScroll>
      </ul>
    </ProgrammingLanguagesContainer>
  )
}
