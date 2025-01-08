import { Element } from 'react-scroll'

import project1 from '../../assets/project_1.png'
import project2 from '../../assets/project_2.png'
import project3 from '../../assets/project_3.png'
import project4 from '../../assets/project_4.png'
import project5 from '../../assets/project_5.png'
import project6 from '../../assets/project_6.png'

import { Container } from '../../layouts/DefaultLayout/styles'
import { ProjectsContainer } from './styles'
import { Mark } from '../../styles/tags'

import { FaNodeJs, FaReact } from 'react-icons/fa6'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiStyledcomponents } from 'react-icons/si'

export function Projects() {
  return (
    <Element name="projects">
      <ProjectsContainer>
        <Container className="container">
          <h2 className="gray">
            Veja os <Mark>Projetos Criados</Mark>
          </h2>
          <div className="projects">
            <div className="item">
              <img src={project1} alt="" />
              <div className="text">
                <h3>Consultoria Excelência</h3>
                <p>
                  Desenvolvimento do site principal da empresa Consultoria
                  Excelência, destacando destacando informações cruciais sobre
                  seus serviços como áreas de atuação, casos de sucesso, etc.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <TbBrandTypescript size={35} />
                  <SiStyledcomponents size={35} />
                  <FaNodeJs size={35} />
                  {/* <img src={reactIcon} alt="" />
            <img src={typescriptIcon} alt="" />
            <img src={styledComponentsIcon} alt="" />
            <img src={nodeIcon} alt="" /> */}
                </div>
                <a
                  href="https://consultoriaexcelencia.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
            <div className="item">
              <img src={project2} alt="" />
              <div className="text">
                <h3>Power Portal</h3>
                <p>
                  Criação de um site com uma coletânea de projetos em Power BI e
                  vagas de emprego na área, enviadas diretamente pelos usuários.
                  O site também inclui ferramentas para estilização de temas dos
                  dashboards e apresentação em TVs, permitindo a definição de
                  tempo e efeitos de transição dos painéis.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  {/* <img src={htmlIcon} alt="" />
            <img src={javascriptIcon} alt="" />
            <img src={phpIcon} alt="" /> */}
                </div>
                <a
                  href="https://powerportal.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
            <div className="item">
              <img src={project3} alt="" />
              <div className="text">
                <h3>Consultoria Excelência - Blog</h3>
                <p>
                  Elaboração de um blog para a Consultoria Excelência,
                  permitindo a publicação regular de artigos, notícias e
                  atualizações da empresa. Implementação de uma área de
                  administração robusta, onde os administradores podem criar,
                  editar e gerenciar postagens facilmente.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  {/* <img src={reactIcon} alt="" />
            <img src={typescriptIcon} alt="" />
            <img src={styledComponentsIcon} alt="" />
            <img src={nodeIcon} alt="" /> */}
                </div>
                <a
                  href="https://consultoriaexcelencia.com.br/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
            <div className="item">
              <img src={project4} alt="" />
              <div className="text">
                <h3>Ignite Feed</h3>
                <p>
                  Desenvolvimento de um projeto que simula um feed de redes
                  sociais sendo possível adicionar e excluir comentários e
                  avaliar as publicações. Este projeto foi desenvolvido com base
                  nas aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  {/* <img src={reactIcon} alt="" />
            <img src={typescriptIcon} alt="" />
            <img src={styledComponentsIcon} alt="" /> */}
                </div>
                <a
                  href="https://marettialine.github.io/ignite-feed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
            <div className="item">
              <img src={project5} alt="" />
              <div className="text">
                <h3>Ignite To Do List</h3>
                <p>
                  Criação de um projeto para gerenciamento de uma lista de
                  tarefas com armazenamento de informações no Local Storage do
                  navegador. Assim, é possível salvar, visualizar e excluir
                  tarefas concluídas e pendentes. Este projeto foi criado como
                  um desafio das aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  {/* <img src={reactIcon} alt="" />
            <img src={typescriptIcon} alt="" />
            <img src={styledComponentsIcon} alt="" /> */}
                </div>
                <a
                  href="https://marettialine.github.io/ignite-to-do-list/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar Página
                </a>
              </div>
            </div>
            <div className="item">
              <img src={project6} alt="" />
              <div className="text">
                <h3>Ignite Timer</h3>
                <p>
                  Elaboração de um projeto de timer para facilitar o uso da
                  Técnica Pomodoro. Os timers criados são armazenados e exibidos
                  em formato de tabela, permitindo a identificação de timers
                  concluídos, em andamento e cancelados. Este projeto foi
                  desenvolvido com base nas aulas da Rocketseat.
                </p>
                <div className="technologies">
                  <FaReact size={35} />
                  <FaReact size={35} />
                  <FaReact size={35} />
                  {/* <img src={reactIcon} alt="" />
            <img src={typescriptIcon} alt="" />
            <img src={styledComponentsIcon} alt="" /> */}
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
          </div>
        </Container>
      </ProjectsContainer>
    </Element>
  )
}
