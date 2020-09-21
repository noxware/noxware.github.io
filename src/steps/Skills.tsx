import React, { useState } from 'react';
import VSensor from 'react-visibility-sensor';
import styled from 'styled-components';

import SkillItem from '../components/SkillItem';

import langs from '../data/skills-langs.json';
import libs from '../data/skills-libs.json';

import {showFromBottomPreset} from '../animations/presets';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }

  @media (min-width: 1000px) {
    font-size: 2.2em; /***************/
  }
`

const CategoryTitle = styled.h2`
  font-size: 1.2em;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

interface CategoryContainerProps {
  animated?: boolean;
}

const CategoryContainer = styled.section<CategoryContainerProps>`
  max-width: 1000px;

  opacity: 0%;
  ${props => props.animated && showFromBottomPreset}

  &:first-of-type {
    ${CategoryTitle} {
      margin-top: 0;
    }
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Item = styled(SkillItem)`
  height: 100px;
  width: 80px;

  .title {
    font-size: 11px;
  }

  .image {
    height: 42px;
    width: 42px;
  }

  @media (min-width: 600px) {
    height: 120px;
    width: 100px;

    .title {
      font-size: 15px;
    }

    .image {
      height: 50px;
      width: 50px;
    }
  }

  @media (min-width: 1000px) {
    height: 140px;
    width: 120px;

    .image {
      height: 55px;
      width: 55px;
    }
  }
`

// TODO: styled-components here

export default function () {
  const [animatedLangs, setAnimatedLangs] = useState(false);
  const [animatedLibs, setAnimatedLibs] = useState(false);

  const langsHandler = (visible: boolean) => visible && setAnimatedLangs(true);
  const libsHandler = (visible: boolean) => visible && setAnimatedLibs(true);

  return (
    <Container className='skills step'>
      <Title className='title'>Skills</Title>

      <VSensor onChange={langsHandler} partialVisibility>
        <CategoryContainer className={`category`} animated={animatedLangs}>
          <CategoryTitle className='subtitle'>Programming and markup languages</CategoryTitle>
          <ItemsContainer className="items">
            {langs.map(l => <Item key={l.title} icon={l.icon} title={l.title}/>)}
          </ItemsContainer>
          
        </CategoryContainer>
      </VSensor>

      <VSensor onChange={libsHandler} partialVisibility>
        <CategoryContainer className={`category`} animated={animatedLibs}>
          <CategoryTitle className='subtitle'>Libraries and frameworks</CategoryTitle>
          <ItemsContainer className="items">
            {libs.map(l => <Item key={l.title} icon={l.icon} title={l.title}/>)}
          </ItemsContainer>
        </CategoryContainer>
      </VSensor>
    </Container>
  );
}