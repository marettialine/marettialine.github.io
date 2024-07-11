import { TimelineContainer } from './styles'

import { Student, Code, Translate } from 'phosphor-react'

export function Timeline() {
  return (
    <TimelineContainer>
      <ul>
        <li>
          <p>
            <span>Técnico em Informática integrado ao ensino médio</span>
            <span>
              Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços
              de Caldas
            </span>
          </p>
          <p className="icon">
            <Student size={32} />
          </p>
        </li>
        <li className="date">2020 a 2025 </li>
        <li>
          <p>
            <span>Curso de Inglês e Conversação em Inglês</span>
            <span>
              CEDET – Centro para o Desenvolvimento do Potencial e Talento
            </span>
          </p>
          <p className="icon">
            <Translate size={32} />
          </p>
        </li>
      </ul>
      <ul>
        <li className="date">2017 a 2019</li>
        <li>
          <p className="icon">
            <Code size={32} />
          </p>
          <p>
            <span>Bacharelado em Engenharia de Computação</span>
            <span>
              Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços
              de Caldas
            </span>
          </p>
        </li>
        <li className="date">2015 - 2018</li>
      </ul>
    </TimelineContainer>
  )
}
