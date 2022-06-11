import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { PageContainer } from "../styles/global.styles"
import { GlobalStyles } from "../styles/global.styles"
import "../styles/fonts.css"
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from "react"

export default function Layout(props) {

  
  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: '#dank',
        easing: 'easeInOutSine',
        opacity: 1,
        duration: 400
      });
    }, 400);
    }
)

  const { title, description } = useSiteMetadata()
  return (
  
    <PageContainer id="dank">
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