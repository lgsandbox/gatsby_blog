import React, { useState, useEffect} from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import "./global.css"


export default function IndexPage() {

  const [themeName, setThemeName] = useState()

  useEffect(() => {
    setThemeName(window.__currentTheme)
  }, [])

  useEffect(() => {
    window.__onSetTheme = function(themeName) {
      setThemeName(themeName)
    }
  }, [])

  return (
<>
    <Layout page="home" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
</>
  )
}