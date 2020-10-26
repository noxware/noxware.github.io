// External libs
import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';

// Custom components
import Item, {Props as ItemProps} from '../components/Item';

// Other
import {mw} from '../lib/util';
import LanguageContext from '../contexts/language';
import en from '../assets/lang-select/en.svg';
import es from '../assets/lang-select/es.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  
  height: 100vh;
  width: 100vw;
  background-color: #fad0c4;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);

  @media (min-width: 900px) {
    padding: 1rem;
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  
  background-color: rgb(247, 250, 252);
  
  /*background-color: inherit;*/

  border: none;
  border-radius: 0;
  height: 100%;
  width: 100%;

  @media (min-width: 900px) {
    justify-content: flex-start;
    width: 800px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
      0px 10px 14px 1px rgba(0, 0, 0, 0.14),
      0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
`

const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-size: 1.7em;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*flex-grow: 1;*/ 

  @media (min-width: 900px) {
    flex-direction: row;
    flex-grow: 1;
  }
`

const LangButtonBase = styled(Item).attrs(() => ({type: 'button'/*, horizontal: !mw(900)*/}))`
  /*height: 50px;
  width: 150px;*/
  width: 200px;
  height: 50px;
  margin: 5px;;
  font-size: 11px;

  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);

  &:hover {
    background-color: rgb(235, 235, 235);
  }

  @media (min-width: 600px) {
    width: 220px;
    height: 50px;
    font-size: 1em;
  }

  /* Horizontal prop */
  @media (min-width: 900px) {
    height: 140px;
    width: 120px;

    font-size: 15px;
  }
`

function LangButton(props: ItemProps) {
  const [horizontal, setHorizontal] = useState(!mw(900));

  useEffect(() => {
    const handleResize = () => setHorizontal(!mw(900));
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <LangButtonBase {...props} horizontal={horizontal} />
}

export default function () {
  const lang = useContext(LanguageContext);

  function setLang(shortName: string) {
    window.localStorage.setItem('lang', shortName);
    lang.setLang(shortName);
  }

  return (
    <Container>
      <SubContainer>
        <Title>Choose a language before continuing....</Title>

        <ButtonsContainer>
          <LangButton
            name='English'
            image={en}
            onClick={() => setLang('en')}
          />
          <LangButton
            name='Español'
            image={es}
            onClick={() => setLang('es')}
          />
        </ButtonsContainer>
      </SubContainer>
    </Container>
  );
}