import { ReactTyped } from 'react-typed'
import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { Element } from 'react-scroll'

import { Socials } from '../../components/Socials'
import { Timeline } from '../../components/Timeline'
import { ProgrammingLanguages } from '../../components/ProgrammingLanguages'

import { Mark } from '../../styles/tags'
import {
  AboutMeContainer,
  HomeContainer,
  ProjectsContainer,
  SkillsContainer,
  TrainingContainer,
} from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'

import girlCoding from '../../assets/girl_coding.svg'
import portfolioOwner from '../../assets/portfolio_owner.png'
import project1 from '../../assets/project_1.png'
import project2 from '../../assets/project_2.png'
import project3 from '../../assets/project_3.png'
import project4 from '../../assets/project_4.png'
import project5 from '../../assets/project_5.png'
import project6 from '../../assets/project_6.png'
import reactIcon from '../../assets/icon_react.png'
import typescriptIcon from '../../assets/icon_typescript.png'
import styledComponentsIcon from '../../assets/icon_styled_components.png'
import nodeIcon from '../../assets/icon_node.png'
import htmlIcon from '../../assets/icon_html.png'
import javascriptIcon from '../../assets/icon_javascript.png'
import phpIcon from '../../assets/icon_php.png'

export function Home() {
  const ageCalculation = new Date().getFullYear() - 2002
  const programmerYearsCalculation = new Date().getFullYear() - 2002 - 14

  const [counterUp, setCounterOn] = useState(false)

  const numbersRef = useRef(null)

  useEffect(() => {
    const currentNumbersRef = numbersRef.current

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(([entry]) => {
      setCounterOn(entry.isIntersecting)
    }, options)

    if (currentNumbersRef) {
      observer.observe(currentNumbersRef)
    }

    return () => {
      if (currentNumbersRef) {
        observer.unobserve(currentNumbersRef)
      }
    }
  }, [])

  return (
    <>
      <Element name="home">
        <HomeContainer>
          <div className="hero">
            <main>
              <h1>
                Hello! Sou a{' '}
                <Mark>
                  <ReactTyped strings={['Aline...']} typeSpeed={150} loop />
                </Mark>
              </h1>
              <h2>Web Developer Full-Stack</h2>
              <p>
                Sou estudante de Engenharia de Computação, com forte interesse
                em tecnologia e inovação. Como desenvolvedora web full-stack,
                combino habilidades em front-end e back-end para criar soluções
                completas e eficientes. Minha trajetória é caracterizada pela
                busca contínua por conhecimento e pela aplicação prática de
                conceitos teóricos, sempre focada na entrega de projetos de alta
                qualidade.
              </p>
              <Socials />
            </main>
            <img src={girlCoding} alt="" />
          </div>
        </HomeContainer>
      </Element>
      <Element name="about">
        <AboutMeContainer>
          <Container>
            <h2>
              Conheça mais <Mark>Sobre mim</Mark>
            </h2>
            <div className="about-info">
              <div className="text">
                <p className="description">
                  Me chamo <Mark>Aline</Mark> e tenho {ageCalculation} anos! Eu
                  nasci em Poços de Caldas mas fui morar na Itália com 3 anos,
                  voltando ao Brasil com 11 anos. <Mark>Sou programadora</Mark>{' '}
                  desde os meus 14 anos de idade,{' '}
                  <Mark>me apaixonei em programação</Mark> e venho desde então
                  aprofundando cada vez mais os meus conhecimentos na área. Fiz
                  ensino médio junto ao ensino técnico em informática e
                  atualmente <Mark>sou aluna de Engenharia de Computação</Mark>,
                  sendo que fiz os dois cursos no IFSULDEMINAS - Campus Poços de
                  Caldas.
                </p>
                <div className="numbers" ref={numbersRef}>
                  <p>
                    <span>
                      {counterUp && (
                        <CountUp
                          start={0}
                          end={programmerYearsCalculation}
                          prefix={'+ '}
                          duration={2}
                          delay={0.3}
                        />
                      )}
                    </span>
                    anos de estudo e experiência
                  </p>
                  <p>
                    <span>
                      {counterUp && (
                        <CountUp
                          start={0}
                          end={10}
                          prefix={'+ '}
                          duration={2}
                          delay={0.3}
                        />
                      )}
                    </span>
                    tecnologias estudadas
                  </p>
                  <p>
                    <span>
                      {counterUp && (
                        <CountUp
                          start={0}
                          end={12}
                          prefix={'+ '}
                          duration={2}
                          delay={0.3}
                        />
                      )}
                    </span>
                    certificados de cursos e eventos
                  </p>
                </div>
              </div>
              <img src={portfolioOwner} alt="" />
            </div>
          </Container>
        </AboutMeContainer>
      </Element>
      <Element name="training">
        <TrainingContainer>
          <Container>
            <h2>
              Minha <Mark>Formação Acadêmica</Mark>
            </h2>
            <Timeline />
          </Container>
        </TrainingContainer>
      </Element>
      <Element name="projects">
        <ProjectsContainer>
          <div className="background"></div>
          <div className="background"></div>
          <Container className="container">
            <h2 className="gray">
              Veja os <Mark>Projetos Criados</Mark>
            </h2>
            <div className="projects">
              <div className="item">
                <img src={project1} alt="" />
                <h3>Consultoria Excelência</h3>
                <p>
                  Desenvolvimento do site principal da empresa Consultoria
                  Excelência, destacando destacando informações cruciais sobre
                  seus serviços como áreas de atuação, casos de sucesso, etc.
                </p>
                <div className="technologies">
                  <img src={reactIcon} alt="" />
                  <img src={typescriptIcon} alt="" />
                  <img src={styledComponentsIcon} alt="" />
                  <img src={nodeIcon} alt="" />
                </div>
                <a
                  href="https://consultoriaexcelencia.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
              <div className="item">
                <img src={project2} alt="" />
                <h3>Power Portal</h3>
                <p>
                  Criação de um site com uma coletânea de projetos em Power BI e
                  vagas de emprego na área, enviadas diretamente pelos usuários.
                  O site também inclui ferramentas para estilização de temas dos
                  dashboards e apresentação em TVs, permitindo a definição de
                  tempo e efeitos de transição dos painéis.
                </p>
                <div className="technologies">
                  <img src={htmlIcon} alt="" />
                  <img src={javascriptIcon} alt="" />
                  <img src={phpIcon} alt="" />
                </div>
                <a
                  href="https://powerportal.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
              <div className="item">
                <img src={project3} alt="" />
                <h3>Consultoria Excelência - Blog</h3>
                <p>
                  Elaboração de um blog para a Consultoria Excelência,
                  permitindo a publicação regular de artigos, notícias e
                  atualizações da empresa. Implementação de uma área de
                  administração robusta, onde os administradores podem criar,
                  editar e gerenciar postagens facilmente.
                </p>
                <div className="technologies">
                  <img src={reactIcon} alt="" />
                  <img src={typescriptIcon} alt="" />
                  <img src={styledComponentsIcon} alt="" />
                  <img src={nodeIcon} alt="" />
                </div>
                <a
                  href="https://consultoriaexcelencia.com.br/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
              <div className="item">
                <img src={project4} alt="" />
                <h3>Ignite Feed</h3>
                <p>
                  Desenvolvimento de um projeto que simula um feed de redes
                  sociais sendo possível adicionar e excluir comentários e
                  avaliar as publicações. Este projeto foi desenvolvido com base
                  nas aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <img src={reactIcon} alt="" />
                  <img src={typescriptIcon} alt="" />
                  <img src={styledComponentsIcon} alt="" />
                </div>
                <a
                  href="https://marettialine.github.io/ignite-feed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
              <div className="item">
                <img src={project5} alt="" />
                <h3>Ignite To Do List</h3>
                <p>
                  Criação de um projeto para gerenciamento de uma lista de
                  tarefas com armazenamento de informações no Local Storage do
                  navegador. Assim, é possível salvar, visualizar e excluir
                  tarefas concluídas e pendentes. Este projeto foi criado como
                  um desafio das aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <img src={reactIcon} alt="" />
                  <img src={typescriptIcon} alt="" />
                  <img src={styledComponentsIcon} alt="" />
                </div>
                <a
                  href="https://marettialine.github.io/ignite-to-do-list/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
              <div className="item">
                <img src={project6} alt="" />
                <h3>Ignite Timer</h3>
                <p>
                  Elaboração de um projeto de timer para facilitar o uso da
                  Técnica Pomodoro. Os timers criados são armazenados e exibidos
                  em formato de tabela, permitindo a identificação de timers
                  concluídos, em andamento e cancelados. Este projeto foi
                  desenvolvido com base nas aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <img src={reactIcon} alt="" />
                  <img src={typescriptIcon} alt="" />
                  <img src={styledComponentsIcon} alt="" />
                </div>
                <a
                  href="https://marettialine.github.io/ignite-timer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
          </Container>
        </ProjectsContainer>
      </Element>

      <Element name="skills">
        <SkillsContainer>
          <Container>
            <h2>
              Quais as <Mark>Tecnologias que uso</Mark>
            </h2>

            <ProgrammingLanguages />
          </Container>
        </SkillsContainer>
      </Element>
    </>
  )
}
