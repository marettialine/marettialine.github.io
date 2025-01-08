import { Element } from 'react-scroll'

import timeline from '../../assets/timeline.svg'

import { Container } from '../../layouts/DefaultLayout/styles'
import { QualificationsContainer } from './styles'
import { Mark } from '../../styles/tags'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useContext, useState } from 'react'
import { Education } from '../Education'
import { FaGraduationCap } from 'react-icons/fa6'
import { VscBriefcase } from 'react-icons/vsc'
import { Works } from '../Works'

export function Qualifications() {
  const pageText = useContext(LanguageContext).pageText.Qualifications

  const [qualificationType, setQualificationType] = useState('education')

  return (
    <Element name="qualifications">
      <QualificationsContainer>
        <Container>
          <h2>
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
          </h2>

          <div className="qualifications-btns">
            <button
              className={qualificationType === 'education' ? 'active' : ''}
              onClick={() => setQualificationType('education')}
            >
              <FaGraduationCap size={25} /> {pageText.subtitle[0]}
            </button>
            <button
              className={qualificationType === 'work' ? 'active' : ''}
              onClick={() => setQualificationType('work')}
            >
              <VscBriefcase size={25} /> {pageText.subtitle[1]}
            </button>
          </div>

          {qualificationType === 'education' ? <Education /> : <Works />}
        </Container>
        <img src={timeline} alt="" />
      </QualificationsContainer>
    </Element>
  )
}
