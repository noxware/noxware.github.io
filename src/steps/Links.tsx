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
  /*background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233);*/
  background-color: rgb(28, 28, 28);
  background-image: linear-gradient(315deg, rgb(28, 28, 28) 0%, rgb(35, 35, 35) 74%);
  color: #ffffff;
`

const Title = styled.h1`
  font-size: 1.7em;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #4CAF50;
`

const LangSwitch = styled.button`
  background-color: rgb(76, 175, 80); /* Green */
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8em;
  border-radius: 5px;

  @media (min-width: 420px) {
    font-size: 1em;
  }

  &:hover {
    background-color: rgb(86, 185, 90);
  }
`

const FlexBreak = styled.div`
  width: 100%;
  height: 0;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const Item = styled.li`
  font-size: 0.8em;
  margin: 0.3rem;

  @media (min-width: 420px) {
    font-size: 1em;
  }

  @media (min-width: 900px) {
    margin: 0;

    &::before {
      display: inline-block;
      content: '|';
      margin-right: 1em;
      margin-left: 1em;
    }

    &:first-of-type::before {
        display: none;
    }
  }
`

function ItemWithLink(props: any) {
  return <Item><Link {...props} /></Item>
}

export default function () {
  const s = useContext(Language);

  return (
    <Container>
      <Title>{s.links.title}</Title>

      <FlexBreak />
      <List>
        <ItemWithLink href='mailto:fprofeti98@gmail.com'>Email (fprofeti98@gmail.com)</ItemWithLink>
        <ItemWithLink href='https://github.com/Noxware'>Github</ItemWithLink>
        <ItemWithLink href='https://github.com/Noxware/noxware.github.io'>{s.links.thisPage}</ItemWithLink>
      </List>
      

      <FlexBreak />
      <LangSwitch onClick={()=>s.setLang('')}>{s.links.switch}</LangSwitch>
    </Container>
  );
}