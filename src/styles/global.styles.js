import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`

  
:root {
  --maxWidth-none: "none";
  --maxWidth-xs: 20rem;
  --maxWidth-sm: 24rem;
  --maxWidth-md: 28rem;
  --maxWidth-lg: 32rem;
  --maxWidth-xl: 36rem;
  --maxWidth-2xl: 42rem;
  --maxWidth-3xl: 48rem;
  --maxWidth-4xl: 56rem;
  --maxWidth-full: "100%";
  --maxWidth-wrapper: var(--maxWidth-2xl);
  --spacing-px: "1px";
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",
    Times, serif;
  --font-body: var(--fontFamily-serif);
  --font-heading: var(--fontFamily-sans);
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;
  --fontSize-root: 16px;
  --lineHeight-none: 1;
  --lineHeight-tight: 1.1;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;
  /* 1.200 Minor Third Type Scale */
  --fontSize-0: 0.833rem;
  --fontSize-1: 1rem;
  --fontSize-2: 1.2rem;
  --fontSize-3: 1.44rem;
  --fontSize-4: 1.728rem;
  --fontSize-5: 2.074rem;
  --fontSize-6: 2.488rem;
  --fontSize-7: 2.986rem;
  --color-primary: #005b99;
  --color-text: #2e353f;
  --color-text-light: #4f5969;
  --color-heading: #1a202c;
  --color-heading-black: black;
  --color
}


*, *:before, *:after {
  box-sizing: border-box;
}


body, html {
    box-sizing: border-box;
    background: ${props => (props.theme === "white" ? "#15181c" : "white")};
    color: ${props => (props.theme === "white" ? "white" : "black")};
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
    line-height: 1.3;
    letter-spacing: 0;
    
  
  }


  footer {
    padding: var(--spacing-6) var(--spacing-0);
  
  }
  
  hr {
    background: var(--color-accent);
    height: 1px;
    border: 0;
  }
  
  /* Heading */
  
  h1,
  h2,
  h4,
  h5,
  h6 {

    margin-top: var(--spacing-12);
    margin-bottom: var(--spacing-6);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
  }
  
  h2,
  h3,
  h4,
  h5,
  h6 {

    color: ${props => (props.theme === "black" ? "black" : "white")};
  }
  
  h1 {

    font-size: var(--fontSize-6);
    color: ${props => (props.theme === "black" ? "black" : "white")};
    margin-top: 10px;
    margin-bottom: 0px;
    
  }
  
  h1 > a {
    color: ${props => (props.theme === "black" ? "black" : "white")};
    text-decoration: none;
  
  }
  
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: ${props => (props.theme === "black" ? "black" : "white")};
  }
  
  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    padding: var(--spacing-0);
  }
  
  ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
  }
  
  ul li,
  ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-8) / 2);
  }
  
  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }
  
  li *:last-child {
    margin-bottom: var(--spacing-0);
  }
  
  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }
  
  blockquote {
    color: var(--color-text-light);
    margin-left: calc(-1 * var(--spacing-6));
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-primary);
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
  }
  
  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }
  
  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }
  

  
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    
  }
  
  a:hover,
  a:focus {
    text-decoration: none;
    color: lightblue;
  }
  
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  margin-right: 30%;
  padding-top: 20px;
  @media (max-width: 1400px) {
    margin-left: 20%;
    margin-right: 20%;
  }
  @media (max-width: 728px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  
`
const PageContainer2 = styled.div`
  opacity: 0;
  
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  `

const SpacedRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 20px;
border-bottom: 1px solid #e6e6e6;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const Wrapper = styled.section`
  display: flex;
`;

const Break = styled.section`
  flex-basis: 100%;
  height: 0;
`
const Container = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;

`
const Space = styled.section`
  flex-direction: column;
  height: 50px;
  marging: 20px;

`

const Button = styled.button`
width: 100%;
height: 40px;
display: inline-block;
border-radius: 3px;
margin: 0.2rem .5rem;
margin-top: 10px;
width: 3rem;
background: (props.theme === "white" ? "white" : "black");
color: ${props => (props.theme === "white" ? "white" : "black")};
border: 2px solid ${props => (props.theme === "black" ? "#669a9e" : "#470035")};
margin-bottom: 0px;
cursor: pointer;
@media (max-width: 726px) {
  margin-top: 40px;
}

  `
const Vertical = styled.div`


@media (min-width: 530px) {
  margin-top: auto;
  margin-bottom: 7px;
}
`

export { Wrapper, Title, 
  Break, Container, Space, 
  GlobalStyles, PageContainer, Row,
  SpacedRow, Vertical,
  Button, PageContainer2,
}