import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, SpacedRow, Button1, ImageWrapper, Author } from "../styles/global.styles"
import { useState, useEffect } from "react"
import { GlobalStyles, lightTheme, darkTheme } from "../styles/global.styles"
import { MdBrightness5, MdBrightness4 } from "react-icons/md"
import anime from "animejs"
import { ThemeProvider } from "styled-components"

export default function Header(props) {

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
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme && ["dark", "light"].includes(savedTheme)) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme("dark");
  }
}, []);
useEffect(() => {

  setTimeout(() => {
    anime({
      targets: '#image',
      easing: 'linear',
      opacity: 1,
      duration: 400
    });
  }, 400);
  } , [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
      >
        <GlobalStyles />
        <SpacedRow>
        <Link to="/">
          <h1>Land.on The Open Web</h1>
        </Link>
        <div>

        <Button1 onClick={toggleTheme}>
        {isDarkTheme ? <MdBrightness4/> : <MdBrightness5/>}
      </Button1>
        </div>
        </SpacedRow>
        <Author id="image">
        <Row style={{paddingTop: "60px", paddingBottom: "60px", borderBottom: "1px solid #e6e6e6"}}>
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
        </Author>

      </nav>
    </header>
    </ThemeProvider>
  )
}