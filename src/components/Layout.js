import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import {  PageContainer } from "../styles/global.styles"
import "../styles/foufix.css"

export default function Layout(props) {


  const { title, description } = useSiteMetadata()
  return (

      <>
        <PageContainer>
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
      </>

  )
}