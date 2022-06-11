import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { PageContainer } from "../styles/global.styles"
import { GlobalStyles } from "../styles/global.styles"
import "../styles/fonts.css"

export default function Layout(props) {


  const { title, description } = useSiteMetadata()
  return (
  
    <PageContainer>
      <GlobalStyles />
    <section
      className={`no`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div>{props.children}</div>
    </section>
    </PageContainer>
  
  )
}