import React, { useEffect, useState }  from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"
import anime from "animejs"
import "../styles/foufix.css"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, lightTheme, darkTheme, 
          Row, SpacedRow, Button, 
          ImageWrapper, Wrapper, 
          PageContainer } from "../styles/global.styles"

export default function Layout(props) {

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {

    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);

  };
  
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {

      setTheme(savedTheme);

      } 

    else if (prefersDark) {

      setTheme("dark");

      }

  }, []);

  useEffect(() => {

    setTimeout(() => {

      anime({
        targets: '#authorFade',
        easing: 'linear',
        opacity: 1,
        duration: 400
      });

    }, 400);

  } , [])

  const { title, description } = useSiteMetadata()

  return (

      <>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />  
          <PageContainer>
            <section>
              <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>    
              <div header> 
                  <SpacedRow>
                    <Link to="/">
                      <h1>Land.on The Open Web</h1>
                    </Link>
                  <div>
                    <Button onClick={toggleTheme}>
                      {isDarkTheme ? <BsSunFill style={{color: "yellow", fontSize: "22px"}}/> : <BsMoonStarsFill style={{color: "white", fontSize: "16px"}}/>}
                    </Button>
                  </div>
                  </SpacedRow>
                    <Wrapper id="authorFade" style={{paddingBottom: "30px"}}>
                      <Row style={{paddingTop: "50px", paddingBottom: "50px", borderBottom: "2px solid #E4E4E4",}}>
                        <ImageWrapper>
                          <StaticImage
                          style={{maxWidth: "50px", maxHeight: "50px" ,  borderRadius: "100%", marginRight: "15px", marginTop: "10px"}}
                          layout="fixed"
                          src="../images/doggo.jpg"
                          placeholder= "none"
                          quality={90}
                          alt="Profile picture"
                        />
                      </ImageWrapper>
           

                      <div>
                        <div style={{paddingBottom: "5px"}}>
                        Landon Grammer is a JavaScript enthusiast &
                        web developer. He is building next generation
                        JAM stack dApps and other fun stuff.
                        </div>
                        <a href="https://github.com/lpgcode">
                        Check out his code on GitHub
                        </a>
                      </div>
                      </Row>
                    </Wrapper>  
              </div>
              <div>{props.children}</div>
            </section>
          </PageContainer>
        </ThemeProvider>
      </>

  )
}