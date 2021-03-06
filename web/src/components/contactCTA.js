import React from 'react'
import styled from 'styled-components'
import H2 from '../components/headings/h2'

export default function ContactCTA () {
  return(
    <Section>
      <H2 heading='Talk to one of our experts today' color='var(--white)' align='center' />
      <Form>
        <Label>
          <span>email</span>
          <Input></Input>
        </Label>
        <Button type='button'>get in touch</Button>
      </Form>
    </Section>
  )
}

const Section = styled.section`
  background-color: var(--darkGreen);
  margin-bottom: 4.75rem;
  padding: 1.6875rem 0 3.1875rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.5625rem auto 2.0625rem;
  max-width: 95%;
  width: 28.875rem;
`

const Input = styled.input`
  background-color: transparent;
  border: 2px solid var(--white);
  color: var(--white);
  display: inline-block;
  max-width: 100%;
  padding: 1rem;
  width: 28.875rem;
`

const Label = styled.label`
  display: block;
  margin: 0 0 2.0625rem;
  max-width: 100%;
  position: relative;
  width: 28.875rem;

  span {
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.5625rem;
    margin-left: 1.125rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 28.875rem;
  }
`

const Button = styled.button`
  align-self: center;
  background-color: var(--white);
  border: 2px solid var(--white);
  border-radius: 2rem;
  color: var(--darkGreen);
  font-family: 'TTSupermolot-Regular';
  font-weight: 600;
  padding: 0.6875rem 0;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 600ms ease, color 600ms ease;
  width: 9.625rem;

  &:hover {
    background-color: var(--darkGreen);
    color: var(--white);
    cursor: pointer;
  }
`
