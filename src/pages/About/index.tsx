import CountUp from 'react-countup'
import { useContext, useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll'

import portfolioOwner from '../../assets/portfolio_owner.png'

import { AboutContainer } from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'
import { Mark } from '../../styles/tags'
import { LanguageContext } from '../../contexts/LanguageContext'

export function About() {
  const pageText = useContext(LanguageContext).pageText.About

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
    <Element name="about">
      <AboutContainer>
        <Container>
          <h2>
            {pageText.title[0]}
            <Mark>{pageText.title[1]}</Mark>
          </h2>
          <div className="about-info">
            <div className="text">
              <p className="description">
                {pageText.description.map((text, index) => {
                  return index % 2 !== 0 ? (
                    <Mark className="mark" key={index}>
                      {text}
                    </Mark>
                  ) : (
                    <span key={index}>{text}</span>
                  )
                })}
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
                  <span>{pageText.numbers[0]}</span>
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
                  <span>{pageText.numbers[1]}</span>
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
                  <span>{pageText.numbers[2]}</span>
                </p>
              </div>
            </div>
            <img src={portfolioOwner} alt="" />
          </div>
        </Container>
      </AboutContainer>
    </Element>
  )
}
