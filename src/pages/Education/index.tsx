import { EducationContainer } from './styles'

import { Student, Code, Translate } from 'phosphor-react'
import { IoMdRocket } from 'react-icons/io'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

export function Education() {
  const pageText = useContext(LanguageContext).pageText.Qualifications.education

  return (
    <EducationContainer>
      <ul>
        <li>
          <p>
            <span>{pageText.english[0]}</span>
            <span>{pageText.english[1]}</span>
          </p>
          <p className="icon">
            <Translate size={32} />
          </p>
        </li>
        <li className="date">{pageText.technician[2]}</li>
        <li>
          <p className="icon">
            <Code size={32} />
          </p>
          <p>
            <span>{pageText.engineering[0]}</span>
            <span>{pageText.engineering[1]}</span>
          </p>
        </li>
        <li className="date">{pageText.rocketseat[2]}</li>
      </ul>
      <ul>
        <li className="date">{pageText.english[2]}</li>

        <li>
          <p>
            <span>{pageText.technician[0]}</span>
            <span>{pageText.technician[1]}</span>
          </p>
          <p className="icon">
            <Student size={32} />
          </p>
        </li>
        <li className="date">{pageText.engineering[2]}</li>

        <li>
          <p>
            <span>{pageText.rocketseat[0]}</span>
            <span>{pageText.rocketseat[1]}</span>
          </p>
          <p className="icon">
            <IoMdRocket size={32} />
          </p>
        </li>
      </ul>
    </EducationContainer>
  )
}
