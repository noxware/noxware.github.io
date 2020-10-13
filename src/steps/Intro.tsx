// External libraries.
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Other
import AnimatedFCE from '../components/AnimatedFCE';
import CODES from '../data/code-animation.yaml';
import Language from '../contexts/language';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233);
  /*background-image: linear-gradient(-45deg, #ee7752, #e73c7e);*/
  /*background-color: #2b333b;*/
  background-color: rgb(28, 28, 28);
  background-image: linear-gradient(315deg, rgb(28, 28, 28) 0%, rgb(35, 35, 35) 74%);
  


/*background-color: #ffa69e;
background-image: linear-gradient(315deg, #ffa69e 0%, #5d4954 74%);*/
  color: #ffffff;
  /*height: 90vh;*/
  width: 100%;

  padding: 1rem;
  /*min-height: 85vh;*/
  min-height: 100vh;

  @media (min-width: 600px) {
    padding: 2rem;
    /*height: 100vh;*/
  }
`

const Title = styled.h1`
  font-size: 2.2em;  
  margin-bottom: 1rem;
  font-family: 'Raleway';

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
  text-align: center;
  color: #c4ced7;
  font-family: 'Raleway';

  font-size: 1em;
  margin-bottom: 1rem;

  @media (min-width: 500px) {
    font-size: 1.2em;
  }

  @media (min-width: 600px) {
    margin-bottom: 3rem;
    font-size: 1.5em;
  }

  @media (min-width: 1000px) {
    font-size: 1.7em;
  }

  @media (min-width: 1280px) {
    font-size: 1.8em;
    margin-bottom: 3rem;
  }
`

const DemoCode = styled(AnimatedFCE)`
  width: 100%;
  .code {
    font-size: 12px;
    line-height: 1.4;
  }

  @media (min-width: 600px) {
    max-width: 720px;
  }

  @media (min-width: 730px) {
    .code {
      font-size: 14px;
    }
  }
`

export default function () {
  const s = useContext(Language);
  const getCode: () => string = () => window.innerWidth < 620 ? CODES.smallCode : CODES.bigCode;

  const [code, setCode] = useState(getCode());

  useEffect(() => {
    const handleResize = () => setCode(getCode());
    
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Title>{s.intro.title}</Title>
      <Subtitle>{s.intro.subtitle}</Subtitle>
      <DemoCode code={code} cursor='%i%' speed={20} />
    </Container>
  );
}