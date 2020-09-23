import React, { useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Intro from './steps/Intro';
import About from './steps/About';
import Skills from './steps/Skills';
import Links from './steps/Links';
import Language from './steps/Language';

import LanguageContext from './contexts/language';
import strings from './data/strings.yaml';


const ResetStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const BaseStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Georgia, serif, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(247, 250, 252);
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica, Arial, sans-serif
  }
`

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`



function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || '');

console.log(lang);
  const currentLang = strings[lang] || {};
  currentLang.setLang = (l: string) => setLang(l);
  console.table(currentLang);
  return (
    <LanguageContext.Provider value={currentLang}>
        <ResetStyles />
        <BaseStyles />
        <Main>
          {
            (lang === '') ? 
              <Language />
            :
              <>
                <Intro />
                <About />
                <Skills />
                <Links />
              </>
          }
          
        </Main>
    </LanguageContext.Provider>
  );
}

export default App;
