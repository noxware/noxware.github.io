import React, {useContext} from 'react';
import styled from 'styled-components';

import LanguageContext from '../contexts/language';

import LangButton from '../components/LangButton';

import en from '../assets/lang-select/en.svg';
import es from '../assets/lang-select/es.svg';

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
        icon={en}
        onClick={
          () => {
            window.localStorage.setItem('lang', 'en');
            lang.setLang('en');
          }
        } />
      <LangButton
        name='Español'
        icon={es}
        onClick={
          () => {
            window.localStorage.setItem('lang', 'es');
            lang.setLang('es');
          }
        } />
    </Container>
  );
}