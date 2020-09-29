import React, { useState, useContext } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import VSensor from 'react-visibility-sensor';

import {mw} from '../lib/util';
import {showFromLeftPreset, showFromRightPreset, showFromBottomPreset} from '../animations/presets';

import CircularImage from '../components/CircularImage';

import Language from '../contexts/language';
import me from '../assets/about-me/me.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  @media (min-width: 730px) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }
`

const SpeakContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 730px) {
    flex-direction: row;
    align-items: center;
    max-width: 1000px;
  }
`

interface AnimatedProps {
  animated?: boolean;
  // Added at 'attrs' props
  animationPreset?: FlattenSimpleInterpolation
}

const ParagraphContainer = styled.blockquote.attrs<AnimatedProps>(props => {
  if (props.animated) {
    if (mw(730))
      return {animationPreset: showFromRightPreset}
    else
      return {animationPreset: showFromBottomPreset}
  }
})<AnimatedProps>`
  opacity: 0%;
  ${props => props.animated && props.animationPreset}
`

const Paragraph = styled.p`
  text-align: center;
  line-height: 1.2; //1.7;
  margin-bottom: 1rem;

  &:last-of-type { /////////////////// CHECKEAR LUEGO
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    font-size: 1.1em;
  }

  @media (min-width: 730px) {
    font-size: 18px;
    text-indent: 0;
    text-align: left;
  }


`

const Photo = styled(CircularImage).attrs<AnimatedProps>(props => {
  if (props.animated) {
    if (mw(730))
      return {animationPreset: showFromLeftPreset}
    else
      return {animationPreset: showFromBottomPreset}
  }
})<AnimatedProps>`
  height: 150px;
  width: 150px;
  margin-bottom: 2rem;

  opacity: 0%;

  @media (min-width: 730px) {
    margin-right: 2rem;
  }

  ${props => props.animated && props.animationPreset}
`

export default () => {
  const [animated, setAnimated] = useState(false);
  const visibilityHandler = (visible: boolean) => visible && setAnimated(true);
  const s = useContext(Language);
  
  return (
    <Container className='about step'>
      <Title className='title'>{s.about.title}</Title>
        <VSensor onChange={visibilityHandler} partialVisibility>
          <SpeakContainer className='speak'>
            <Photo animated={animated} alt='cat' src={me}/>
            <ParagraphContainer animated={animated}>
              <Paragraph>
                {s.about.paragraphs[0]}
              </Paragraph>
              <Paragraph>
                {s.about.paragraphs[1]}
              </Paragraph>
              <Paragraph>
                {s.about.paragraphs[2]}
              </Paragraph>
            </ParagraphContainer>
          </SpeakContainer>
        </VSensor>
    </Container>
  );
}