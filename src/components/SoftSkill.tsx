import React from 'react';
import styled from 'styled-components';
import VisibileAnimation from '../components/VisibileAnimation';

import VAnimation from '../components/VisibileAnimation';
import {showFromBottomPreset} from '../animations/presets';

interface StyledProps {
  right?:boolean;
}

const Container = styled(VisibileAnimation)<StyledProps>`
  display: flex;
  margin-bottom: 3rem;
  width: 100%;
  justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};;
  align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
`;

const TextContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  max-width: 400px;

  @media (min-width: 600px) {
    font-size: 1em;
  }
`;

const Title = styled.h2`
  font-size: 1.3em;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`

`;

const Image = styled.img`
  object-fit: scale-down;
  height: 80px;
  width: 80px;
  margin-right: 1rem;

  @media (min-width: 730px) {
    height: 100px;
    width: 100px;
  }
`;

interface Props {
  name: string;
  desc: string;
  image: string;
  right?: boolean;
  className?: string;
}

export default function ({name, desc, image, right, className}: Props) {
  return (
    <Container className={className} right={right} preset={showFromBottomPreset}>
      <Image src={image} />
      <TextContainer right={right}>
        <Title>{name}</Title>
        <Description>{desc}</Description>
      </TextContainer>
    </Container>
  );
}