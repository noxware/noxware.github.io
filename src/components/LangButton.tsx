import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 0.4em;
  border-radius: 10%;
  border: 1px solid rgb(219, 219, 219);
  background-color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  height: 150px;
  width: 130px;
`

const Image = styled.img`
  height: 64px;
  width: 64px;
`

const Name = styled.span`
  margin-top: 1em;
  font-size: 0.9em;
  text-align: center;
`



interface Props {
  icon?: string;
  name: string;
  onClick?: () => void;
  className?: string;
}

export default function (props: Props) {
  return (
    <Container className={`lang-button ${props.className}`} onClick={props.onClick}>
      <Image className='image' src={props.icon} alt={`${props.name || ''} icon`}/>
      <Name className='name'>{props.name}</Name>
    </Container>
  );
}