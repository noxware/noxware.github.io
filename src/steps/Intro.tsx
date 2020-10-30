// External libraries.
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Other
import AnimatedFCE from '../components/AnimatedFCE';
import BottomWave from '../components/BottomWave';
import codes from '../data/code-animation.yaml';
import Language from '../contexts/language';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #08f;
  color: #ffffff;
  width: 100%;
  padding: 1rem;

  @media (min-width: 600px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 500px) {
    font-size: 2.8em;
  }

  @media (min-width: 730px) {
    font-size: 3.2em;
  }

  @media (min-width: 1280px) {
    font-size: 4em;

  }
`

const Subtitle = styled.h2`
  font-size: 1em;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: rgb(230, 230, 230);
  margin-bottom: 1rem;

  @media (min-width: 500px) {
    font-size: 1.2em;
  }

  @media (min-width: 600px) {
    font-size: 1.5em;
    margin-bottom: 3rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.7em;
  }

  @media (min-width: 1280px) {
    font-size: 1.8em;
    margin-bottom: 3rem;
  }
`

export default function () {
  const s = useContext(Language);

  return (
      <Container>
        <SubContainer>
          <Title>{s.intro.title}</Title>
          <Subtitle>{s.intro.subtitle}</Subtitle>
          <AnimatedFCE code={codes.smallCode} cursor='%i%' speed={20} />
        </SubContainer>
        <BottomWave />
      </Container>
  );
}