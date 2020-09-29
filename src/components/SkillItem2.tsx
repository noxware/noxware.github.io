import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 0.4em;
  border-radius: 10%;
  border: 1px solid rgb(219, 219, 219);
  background-color: white;
  font-family: Helvetica, Arial, sans-serif;
  height: 150px;
  width: 130px;
`

const Image = styled.img`
  height: 64px;
  width: 64px; /*64*/
  object-fit: scale-down;
`

const Name = styled.span`
  margin-top: 1em;
  font-size: 0.9em;
  text-align: center;
`

const Description = styled.span`
  margin-top: 1em;
  font-size: 0.7em;
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