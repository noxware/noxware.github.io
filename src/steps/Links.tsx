import React, { useContext } from 'react';
import styled from 'styled-components';

import Language from '../contexts/language';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  font-family: Helvetica, Arial, sans-serif;
  background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233);
  color: #ffffff;
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }
`

const Link = styled.a`
  font-size: 0.8em;
  text-decoration: none;
  color: #4CAF50;

  @media (min-width: 420px) {
    font-size: 1.1em;
  }
`

const LangSwitch = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8em;
  margin-top: 2rem;
  border-radius: 5px;

  @media (min-width: 420px) {
    font-size: 1em;
  }
`

const FlexBreak = styled.div`
  width: 100%;
  height: 0;
`

const BaseSeparator = styled.span`
  font-size: 0.8em;
  margin-right: 1em;
  margin-left: 1em;
  
  @media (min-width: 420px) {
    font-size: 1.1em;
  }
`

function Separator() {
  return <BaseSeparator>|</BaseSeparator>
}

export default function () {
  const s = useContext(Language);

  return (
    <Container>
      <Title>{s.links.title}</Title>

      <FlexBreak />
      <Link href='mailto:fprofeti98@gmail.com'>E-Mail (fprofeti98@gmail.com)</Link>
      <Separator />
      <Link href='https://github.com/Noxware'>Github</Link>

      <FlexBreak />
      <LangSwitch onClick={()=>s.setLang('')}>{s.links.switch}</LangSwitch>
    </Container>
  );
}