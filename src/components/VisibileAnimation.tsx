import React, {useState} from 'react';
import VSensor from 'react-visibility-sensor';

import styled, {FlattenSimpleInterpolation} from 'styled-components';

interface ContainerProps {
  animated?: boolean;
  preset: () => FlattenSimpleInterpolation;
}

const Container = styled.div<ContainerProps>`
  opacity: 0%;
  ${props => props.animated && props.preset};
`;

interface Props {
  preset: () => FlattenSimpleInterpolation;
  children: React.ReactNode;
  className?: string;
}

export default function ({preset, children, className}: Props) {
  const [animated, setAnimated] = useState(false);
  const visibilityHandler = (visible: boolean) => visible && setAnimated(true);
  
  return (
    <VSensor onChange={visibilityHandler} partialVisibility>
      <Container className={className} preset={preset} animated={animated}>
        {children}
      </Container>
    </VSensor>
  );
}