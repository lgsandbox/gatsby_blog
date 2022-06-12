import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, SpacedRow, Button } from "../styles/global.styles"
import { useState, useEffect } from "react"
import { GlobalStyles } from "../styles/global.styles"
import { MdBrightness5, MdBrightness4 } from "react-icons/md"



export default function Header(props) {

 /**  
  
  const themeHandler = () => {
  if (theme === "black") { setTheme("white") 
  localStorage.setItem(theme, JSON.stringify(theme));
} 
  else if (theme === "white") { setTheme("black") 
  localStorage.setItem(theme, JSON.stringify(theme));}
}
**/
const [theme, setTheme] = useState("black")
const isDarkTheme = theme === "black";

  return (
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
      >
        <SpacedRow>
        <Link to="/">
          <h1>Land.on The Open Web</h1>
        </Link>
        <div>

        <Button >
        {isDarkTheme ?
          <MdBrightness4/> :
          <MdBrightness5/>}
        </Button>
      
 
        </div>
        </SpacedRow>

        <Row style={{paddingTop: "60px", paddingBottom: "60px", borderBottom: "1px solid #e6e6e6"}}>
  
        <StaticImage
        style={{maxWidth: "50px", maxHeight: "50px" ,  borderRadius: "100%", marginRight: "15px", marginTop: "10px"}}
 
        src="../images/doggo.jpg"

        quality={95}
        alt="Profile picture"
      />

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
 

      </nav>
    </header>
  )
}