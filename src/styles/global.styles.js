import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

// you can move themes to their own file and import if preferred

export const lightTheme = {

  body: '#f1f1f1',
  button: 'linear-gradient(#070B34 60%, #e5e9ea )',
  card: '#e5e9ea',
  cardhover: '#d9dadb',
  date: '#121620',
  header: '#070B34',
  hover: 'lightblue',
  link : '#070B34',
  paragraph: '#121620',
  text: '#121620',
  title: '#070B34',
 
};
export const darkTheme = {

  body: '	#1c1a1b',
  button: 'linear-gradient(#d36e79 60%, #90d5ec );',
  card: '#363d36',
  cardhover: '#5b6b5b',
  date: '#6ecbd3',
  header: '#d36e79',
  hover: 'lightpink',
  link: '#00e585',
  paragraph: '#f1f1f1',
  text: '#f1f1f1',
  title: '#d36e79',

};

const GlobalStyles = createGlobalStyle`

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
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {

    color: ${({ theme }) => theme.header };
    letter-spacing: -0.025em;

  }
  
  h1 {

    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 0px;
    
  }

  h2 {
    color: ${({ theme }) => theme.title };
  }

  h3 {
    color: ${({ theme }) => theme.date };
    font-size: 16px;
  }

  h5 {
    color: ${({ theme }) => theme.date };
  }
  
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {

    text-decoration: none;

  }
  
  ul,
  ol {

    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin-bottom: 2rem;
    list-style-position: outside;
    list-style-image: none;

  }
  
  ul li,
  ol li {

    padding-left: 0;
    margin-bottom: 1rem;

  }
  
  li > p {
    margin-bottom: 1rem;
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
    line-height: 2rem;
    font-size: 15px;

  }


`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28%;
  margin-right: 28%;
  padding-top: 20px;

  @media (max-width: 1300px) {
    margin-left: 16%;
    margin-right: 16%;
  }
  @media (max-width: 728px) {
    margin-left: 10px;
    margin-right: 10px;
  } 
`
const Wrapper = styled.div`
  opacity: 0;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 728px) {
    padding-top: 20px;
  }
`
const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #E4E4E4;
`
const Break = styled.section`
  flex-direction: column;
  height: 30px;
  margin: 10px;
`

const ImageWrapper = styled.div`
  @media (max-width: 728px) {
    padding-top: 35px;
  }
`

const Container = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  display: inline-block;
  border-radius: 10px;
  margin: .5rem;
  margin-top: 10px;
  width: 3rem;
  background: ${({ theme }) => theme.button};
  margin-bottom: 0;
  border: none;
  cursor: pointer;

  @media (max-width: 726px) {
    margin-top: 40px;
  }
`

const Card = styled.div`
background: ${({ theme }) => theme.card};
border-radius: 10px;
margin-bottom: 20px;
&:hover { background: ${({ theme }) => theme.cardhover} };
`

export { 

  GlobalStyles, 
  Container, Break, 
  PageContainer, Row,
  SpacedRow, Card,
  Button, Wrapper, ImageWrapper,
  
}