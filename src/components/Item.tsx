import React from 'react';
import styled, {css} from 'styled-components';

export interface Props {
  image?: string;
  name: string;
  desc?: string;
  className?: string;
  type?: 'container' | 'button'| 'link';
  horizontal?: boolean;

  [otherProps: string]: any;
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 10px;

  height: 140px;
  width: 120px;

  /* Font family */

  padding: 1.2em;

  ${
    (props) => props.horizontal && css`
      flex-direction: row;
      justify-content: flex-start;
      border-radius: 5px;
      padding: 0.5em;
    `
  }
  
`

const Image = styled.img<Props>`
  height: 0;
  width: 100%;
  flex-grow: 1;
  object-fit: scale-down;

  /*height: 55px;
  width: 55px;
  flex-grow: 0;*/
  margin-bottom: auto;

  ${
    (props) => props.horizontal && css`
      height: 100%;
      width: auto;
      flex-grow: 0;
      margin-bottom: none;
    `
  }
`

const Name = styled.span<Props>`
  font-size: 1em;
  text-align: center;
  /*margin-top: 1.5em;*/
  line-height: 1em;
  /*height: 1em;*/
  
`

const NameWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 2em;
  overflow: visible;
  margin-top: 1em;

  ${
    (props) => props.horizontal && css`
      display: inline-block;
      height: auto;
      margin-top: 0;
      flex-grow: 1;
    `
  }
`

const Description = styled.span<Props>`
  font-size: 0.8em;
  margin-top: 0.2em;
  text-align: center;

  ${
    (props) => props.horizontal && css`
      margin-top: 0;
    `
  }
`

const typeToTag: {[k: string]: React.ElementType} = {
  container: 'div',
  button: 'button',
  link: 'a'
}

export default function (props: Props) {
  const {image, name, desc, className, type, horizontal, ...otherProps} = props;

  return (
    <Container className={`skill-item container ${className}`} as={type ? typeToTag[type] : undefined} horizontal={horizontal} {...otherProps}>
      <Image className='image' src={image} alt={`${name} image.`} horizontal={horizontal} />
      <NameWrapper className='name-wrapper' horizontal={horizontal}>
        <Name className='name' horizontal={horizontal}>{name}</Name>
      </NameWrapper>
      {desc && <Description className='description' horizontal={horizontal}>{desc}</Description>}
    </Container>
  );
}