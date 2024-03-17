import React, { useContext } from "react";
import styled from "styled-components";

import Language from "../contexts/language";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  /*background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233);*/
  background-color: #08f;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 1.7em;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 2px;
`;

const LangSwitch = styled.button`
  background-color: #08f; /* Green */
  border: 1px solid white;
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
    background-color: #2af;
  }
`;

const FlexBreak = styled.div`
  width: 100%;
  height: 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

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
      content: "|";
      margin-right: 1em;
      margin-left: 1em;
    }

    &:first-of-type::before {
      display: none;
    }
  }
`;

function ItemWithLink(props: any) {
  return (
    <Item>
      <Link {...props} />
    </Item>
  );
}

export default function () {
  const s = useContext(Language);

  return (
    <Container>
      <Title>{s.links.title}</Title>

      <FlexBreak />
      <List>
        <ItemWithLink href="https://www.linkedin.com/in/franco-profeti/">
          Linkedin
        </ItemWithLink>
        <ItemWithLink href="https://github.com/noxware">Github</ItemWithLink>
      </List>
    </Container>
  );
}
