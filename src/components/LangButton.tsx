import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin: 0.4em;
  border-radius: 10%;
  border: none;
  /*background-color: #333333;*/
  background-color: rgb(33,41,49);
  font-family: Helvetica, Arial, sans-serif;
  color: inherit;

  &:hover {
    background-color: #555555;
  }
`

const Image = styled.img`
  height: 64px;
  width: 80px;
`

const Name = styled.span`
  margin-top: 1em;
  font-size: 1em;
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