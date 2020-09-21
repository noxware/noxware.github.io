import React, { useState } from 'react';
import VSensor from 'react-visibility-sensor';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import {mw} from '../lib/util';
import {showFromLeftPreset, showFromRightPreset, showFromBottomPreset} from '../animations/presets';
import CircularImage from '../components/CircularImage';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  @media (min-width: 600px) {

  }
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }

  @media (min-width: 730px) {

  }

  @media (min-width: 1280px) {

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

  @media (min-width: 1000px) {

  }

  @media (min-width: 1280px) {

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
  
  return (
    <Container className='about step'>
      <Title className='title'>About me</Title>
        <VSensor onChange={visibilityHandler} partialVisibility>
          <SpeakContainer className='speak'>
            <Photo animated={animated} alt='cat' src='https://www.miamiherald.com/living/pets/g4tdgu/picture135751113/alternates/FREE_1140/dribbling-cat'/>
            <ParagraphContainer animated={animated}>
              <Paragraph>
                I am a 21 years old developer from Uruguay who has been interested in programming since young.
                I had my first contact with the world of programming at the age of 12 and I began to learn how to
                program for real at the age of 15 thanks to the help of 2 friends who taught me about
                open source software.
              </Paragraph>
              <Paragraph>
                From there, I started to learn all kinds of things that interested me, from web development to
                assembly language and electronics.
              </Paragraph>
              <Paragraph>
                I love programming and I am always learning things as I need them for something.
                Learning new things related to technology is always a pleasure.
                The satisfaction of seeing something created by oneself, working, is indescribable.
              </Paragraph>
            </ParagraphContainer>
          </SpeakContainer>
        </VSensor>
    </Container>
  );
}