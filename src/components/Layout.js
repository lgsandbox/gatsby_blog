import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { GlobalStyles, PageContainer } from "../styles/global.styles"
import "../styles/fonts.css"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

export default function Layout(props) {

  const theme = {
    colors: {
       plum: "#52314b",
       rose: "#c3537d",
       dryrose: "#dd7f9a",
       primrose: "#e8babf",
       white: "#fff"
    }
 }
 

const BodyContainer = styled.div`
  display: flex;
  color: ${props => props.theme.font};
  background: ${props => props.theme.body};
`


  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
     
    <PageContainer>
      <GlobalStyles />
    <section>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header title={title} />
      <div>{props.children}</div>
    </section>
    </PageContainer>

    </ThemeProvider>
  )
}