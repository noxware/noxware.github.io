import React, {useContext} from 'react';
import styled from 'styled-components';

import LanguageContext from '../contexts/language';

import LangButton from '../components/LangButton';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  /*background-color: #111111;*/
  background-color: rgb(43,51,59);
  color: #ffffff;
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 730px) {
    font-size: 2em;
  }
`

const FlexBreak = styled.div`
  width: 100%;
  height: 0;
`

export default function () {
  const lang = useContext(LanguageContext);


  return (
    <Container>
      <Title>Select a language / Elige un lenguaje</Title>

      <FlexBreak />
      <LangButton
        name='English'
        icon={'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png'}
        onClick={
          () => {
            window.localStorage.setItem('lang', 'en');
            lang.setLang('en');
          }
        } />
      <LangButton
        name='Español'
        icon={'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png'}
        onClick={
          () => {
            window.localStorage.setItem('lang', 'es');
            lang.setLang('es');
          }
        } />
    </Container>
  );
}