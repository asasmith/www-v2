import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Container from '../components/uContentContainer'
import H2 from '../components/headings/h2'

import linkArrow from '../images/link-arrow.svg'

export default function HpFeatures ({data: { title, features }}) {

  return (
    <Section>
      <Container>
        <H2 heading={title} color='var(--grey)' />
        <GridList>
          {features.map(item => {
            return (
              <li>
                <div>
                  <Title>{item.title}</Title>
                  <P>{item.featBody}</P>
                  <StyledLink to='#'>Read More</StyledLink>
                </div>
              </li>
            )}
          )}
        </GridList>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  margin: 3.875rem 0;
`

const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(72rem / 4),1fr));
  grid-column-gap: 1.25rem;
  grid-row-gap: 3.125rem;
  list-style: none;
  margin-top: 1rem;
`

const Title = styled.h3`
  color: var(--grey);
  font-family: var(--headingFont);
  font-size: 2rem;
  font-weight: 900;
  line-height: 2.375rem;
`

const P = styled.p`
  max-width: 90%;
`

const StyledLink = styled(Link)`
  color: var(--grey);
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  position: relative;

  &:after {
    background-image: url(${linkArrow});
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    height: .75rem;
    left: 105%;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    width: 1rem;
  }
`