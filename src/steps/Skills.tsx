import React, { useState, useContext } from 'react';
import VSensor from 'react-visibility-sensor';
import styled from 'styled-components';

import SkillItem from '../components/SkillItem';

import {langs, libs, other, hlangs} from '../data/skills';

import {showFromBottomPreset} from '../animations/presets';

import Language from '../contexts/language';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  @media (min-width: 730px) {
    padding-bottom: 7rem;
  }
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
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
      height: 55px; /*55*/
      width: 55px;
    }
  }
`

interface CategoryProps {
  datasrc: typeof langs;
  children: React.ReactNode;
}

function Category({datasrc, children}: CategoryProps) {
  const [animated, setAnimated] = useState(false);
  const visibilityHandler = (visible: boolean) => visible && setAnimated(true);

  return (
    <VSensor onChange={visibilityHandler} partialVisibility>
      <CategoryContainer animated={animated}>
        <CategoryTitle>{children}</CategoryTitle>
        <ItemsContainer>
          {datasrc.map(i => <Item key={i.name} icon={i.image} title={i.name} text={i.desc}/>)}
        </ItemsContainer>
      </CategoryContainer>
    </VSensor>
  );
}

export default function () {
  const s = useContext(Language);

  return (
    <Container className='skills step'>
      <Title className='title'>{s.skills.title}</Title>

      <Category datasrc={langs}>{s.skills.langs.title}</Category>
      <Category datasrc={libs}>{s.skills.libs.title}</Category>
      <Category datasrc={other}>{s.skills.other.title}</Category>
      <Category datasrc={hlangs[s.currentLangKey]}>{s.skills.hlangs.title}</Category>
    </Container>
  );
}