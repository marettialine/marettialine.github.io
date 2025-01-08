import { Element } from 'react-scroll'

import timeline from '../../assets/timeline.svg'

import { Mark } from '../../styles/tags'
import { Container } from '../../layouts/DefaultLayout/styles'
import { EducationContainer, TimelineContainer } from './styles'

import { Student, Code, Translate } from 'phosphor-react'
import { IoMdRocket } from 'react-icons/io'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

export function Education() {
  const pageText = useContext(LanguageContext).pageText.Education

  return (
    <Element name="training">
      <EducationContainer>
        <Container>
          <h2>
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
          </h2>

          <TimelineContainer>
            <ul>
              <li>
                <p>
                  <span>{pageText.list.english[0]}</span>
                  <span>{pageText.list.english[1]}</span>
                </p>
                <p className="icon">
                  <Translate size={32} />
                </p>
              </li>
              <li className="date">2017 a 2019</li>
              <li>
                <p className="icon">
                  <Code size={32} />
                </p>
                <p>
                  <span>{pageText.list.engineering[0]}</span>
                  <span>{pageText.list.engineering[1]}</span>
                </p>
              </li>
              <li className="date">2023 a 2024</li>
            </ul>
            <ul>
              <li className="date">2015 a 2018</li>

              <li>
                <p>
                  <span>{pageText.list.technician[0]}</span>
                  <span>{pageText.list.technician[1]}</span>
                </p>
                <p className="icon">
                  <Student size={32} />
                </p>
              </li>
              <li className="date">2020 a 2025 </li>

              <li>
                <p>
                  <span>{pageText.list.rocketseat[0]}</span>
                  <span>{pageText.list.rocketseat[1]}</span>
                </p>
                <p className="icon">
                  <IoMdRocket size={32} />
                </p>
              </li>
            </ul>
          </TimelineContainer>
        </Container>
        <img src={timeline} alt="" />
      </EducationContainer>
    </Element>
  )
}
