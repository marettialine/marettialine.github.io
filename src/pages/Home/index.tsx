import { ReactTyped } from 'react-typed'
import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

import { Socials } from '../../components/Socials'
import { ProgrammingLanguages } from '../../components/ProgrammingLanguages'

import { Mark } from '../../styles/tags'
import { AboutMeContainer, HomeContainer, TrainingContainer } from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'

import girlCoding from '../../assets/girl_coding.svg'
import portfolioOwner from '../../assets/portfolio_owner.png'
import { Timeline } from '../../components/Timeline'

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
              habilidades em front-end e back-end para criar soluções completas
              e eficientes. Minha trajetória é caracterizada pela busca contínua
              por conhecimento e pela aplicação prática de conceitos teóricos,
              sempre focada na entrega de projetos de alta qualidade.
            </p>
            <Socials />
          </main>
          <img src={girlCoding} alt="" />
        </div>
      </HomeContainer>
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
                ensino médio junto ao ensino técnico em informática e atualmente{' '}
                <Mark>sou aluna de Engenharia de Computação</Mark>, sendo que
                fiz os dois cursos no IFSULDEMINAS - Campus Poços de Caldas.
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
                  anos de estudo e experiência
                </p>
              </div>
            </div>
            <img src={portfolioOwner} alt="" />
          </div>
        </Container>
      </AboutMeContainer>
      <TrainingContainer>
        <Container>
          <h2>
            Minha <Mark>Formação Acadêmica</Mark>
          </h2>
          <Timeline />
        </Container>
      </TrainingContainer>
      <Container>
        <ProgrammingLanguages />
      </Container>
    </>
  )
}
