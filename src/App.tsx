// External libraries
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Steps
import Intro from "./steps/Intro";
import About from "./steps/About";
import SoftSkills from "./steps/SoftSkills";
import Skills from "./steps/Skills";
import Links from "./steps/Links";
import Language from "./steps/Language";

// Other
import LanguageContext from "./contexts/language";
import strings from "./data/strings.yaml";

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
`;
/**
 * Custom base styles.
 */
const BaseStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*background-color: rgb(247, 250, 252);*/
    background-color: rgb(255, 255, 255);
    line-height: 1;
  }


  button, a {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    cursor: pointer;
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

/**
 * Main web app component.
 */
function App() {
  // Lang can be 'es', 'en' or ''. If the string is empty, the language selection screen will be displayed.
  const [lang, setLang] = useState(window.localStorage.getItem("lang") || "en");

  const currentLang = strings[lang];
  currentLang.setLang = (l: string) => setLang(l);
  currentLang.currentLangKey = lang;

  return (
    <LanguageContext.Provider value={currentLang}>
      <ResetStyles />
      <BaseStyles />
      <Main>
        {lang === "" ? (
          <Language />
        ) : (
          <>
            <Intro />
            <About />
            <SoftSkills />
            <Skills />
            <Links />
          </>
        )}
      </Main>
    </LanguageContext.Provider>
  );
}

export default App;
