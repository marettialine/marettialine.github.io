import { WorksContainer } from './styles'

import { Student, Code, Translate } from 'phosphor-react'
import { IoMdRocket } from 'react-icons/io'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

export function Works() {
  const pageText = useContext(LanguageContext).pageText.Qualifications.works

  return (
    <WorksContainer>
      <ul>
        <li>
          <p>
            <span>{pageText.ciadi[0]}</span>
            <span>{pageText.ciadi[1]}</span>
          </p>
          <p className="icon">
            <Translate size={32} />
          </p>
        </li>
        <li className="date">{pageText.excelenciaTrainee[2]}</li>
        <li>
          <p className="icon">
            <Code size={32} />
          </p>
          <p>
            <span>{pageText.excelencia[0]}</span>
            <span>{pageText.excelencia[1]}</span>
          </p>
        </li>
        <li className="date">{pageText.arteDeCaderno[2]}</li>
      </ul>
      <ul>
        <li className="date">{pageText.ciadi[2]}</li>

        <li>
          <p>
            <span>{pageText.excelenciaTrainee[0]}</span>
            <span>{pageText.excelenciaTrainee[1]}</span>
          </p>
          <p className="icon">
            <Student size={32} />
          </p>
        </li>
        <li className="date">{pageText.excelencia[2]}</li>

        <li>
          <p>
            <span>{pageText.arteDeCaderno[0]}</span>
            <span>{pageText.arteDeCaderno[1]}</span>
          </p>
          <p className="icon">
            <IoMdRocket size={32} />
          </p>
        </li>
      </ul>
    </WorksContainer>
  )
}
