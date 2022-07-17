import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  link : '#121620',
  hover: 'lightblue',
  paragraph: '#121620',
  header: '#121620',
};
export const darkTheme = {
  body: '	#252526',
  text: '#f1f1f1',
  header: '#d63160',
 
  link: '#d63160',
  hover: 'lightpink',
  paragraph: '#f1f1f1',
};

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
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-sizing: border-box;
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
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-heading);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
  }
  
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.header };
  }
  
  h6 {
    line-height: 200px;
  }
  
  
  h1 {

    font-size: var(--fontSize-6);
    color: ${({ theme }) => theme.header};
    margin-top: 10px;
    margin-bottom: 0px;
    
  }
  


  h1:hover,
  h1:focus {
    

  }

  
  h2:hover,
  h2:focus {

  }
  
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
   
  }

  p {
    
    color: ${({ theme }) => theme.header};
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;

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
    color: ${({ theme }) => theme.link};
    font-weight: bold;
    text-decoration: none;
    
  }
  
  a:hover,
  a:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.hover};
  }
  
  a:active {
    color: black;
  }

  p {
    color: ${({ theme }) => theme.paragraph};
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
    margin-left: 10px;
    margin-right: 10px;
  } 
`
const PageContainer2 = styled.div`
  opacity: 0;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 728px) {
    padding-top: 20px;
  }
`

const ImageWrapper = styled.div`
  @media (max-width: 728px) {
    padding-top: 35px;
  }
`

const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #E4E4E4;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
`

const Wrapper = styled.section`
  display: flex;
`

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
  height: 30px;
  margin: 10px;
`

const Button1 = styled.button`
  width: 100%;
  height: 50px;
  display: inline-block;
  border-radius: 10px;
  margin: 0.2rem .5rem;
  margin-top: 10px;
  width: 3rem;
  background: ${({ theme }) => theme.hover};
  margin-bottom: 0px;
  border: none;
  cursor: pointer;
  @media (max-width: 726px) {
    margin-top: 40px;
  }
`

const Card = styled.div`
background: #e5e9ea;
border-radius: 10px;
&:hover { background: #d9dadb; };


`

const Author = styled.div`
  opacity: 0;
`

export { Wrapper, Title, 
  Break, Container, Space, 
  GlobalStyles, PageContainer, Row,
  SpacedRow, Card,
  Button1, PageContainer2, ImageWrapper, Author
}