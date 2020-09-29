import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 10%;

  height: 140px;
  width: 120px;

  /* Font family */

  margin: 0.4em;
  font-family: Helvetica, Arial, sans-serif;
`

const Image = styled.img`
  height: 1px;
  flex-grow: 1;

  object-fit: scale-down;
`

const Name = styled.span`
  font-size: 1em;
  text-align: center;
  margin-top: 1.5em;
`

const Description = styled.span`
  font-size: 0.8em;
  margin-top: 0.5em;
  text-align: center;
`

interface Props {
  image?: string;
  name: string;
  desc?: string;
  className?: string;
}

export default function (props: Props) {
  return (
    <Container className={`skill-item container ${props.className}`}>
      <Image className='image' src={props.image} alt={`${props.name} image.`} />
      <Name className='name'>{props.name}</Name>
      {props.desc && <Description>{props.desc}</Description>}
    </Container>
  );
}