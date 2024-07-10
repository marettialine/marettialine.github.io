import { ReactTyped } from 'react-typed'
import { Socials } from '../../components/Socials'

import { Mark } from '../../styles/tags'
import { HomeContainer } from './styles'

import girlCoding from '../../assets/girl_coding.svg'

export function Home() {
  return (
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
            Sou estudante de Engenharia de Computação, com forte interesse em
            tecnologia e inovação. Como desenvolvedora web full-stack, combino
            habilidades em front-end e back-end para criar soluções completas e
            eficientes. Minha trajetória é caracterizada pela busca contínua por
            conhecimento e pela aplicação prática de conceitos teóricos, sempre
            focada na entrega de projetos de alta qualidade.
          </p>
          <Socials />
        </main>
        <img src={girlCoding} alt="" />
      </div>
    </HomeContainer>
  )
}
