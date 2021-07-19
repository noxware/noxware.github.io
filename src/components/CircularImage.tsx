import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
`

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  width: auto;
`

interface Props {
  [attr: string] : any
  className?: string
}

export default function (props: Props) {
  return (
    <Container className={`circular-image ${props.className}`}>
      <a href={props.src}>
        <Image {...props} />
      </a>
    </Container>
  );
}