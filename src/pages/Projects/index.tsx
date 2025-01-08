import { Element } from 'react-scroll'

import { Container } from '../../layouts/DefaultLayout/styles'
import { ProjectsContainer } from './styles'
import { Mark } from '../../styles/tags'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

export function Projects() {
  const pageText = useContext(LanguageContext).pageText.Projects

  return (
    <Element name="projects">
      <ProjectsContainer>
        <Container className="container">
          <h2 className="gray">
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
          </h2>
          <div className="projects">
            {pageText.list.map((project) => (
              <div className="item" key={project.title}>
                <img src={project.img} alt="" />
                <div className="text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech) => tech)}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {pageText.visit}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </ProjectsContainer>
    </Element>
  )
}
