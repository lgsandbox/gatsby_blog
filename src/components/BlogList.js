import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import { useEffect, useState } from "react"
import anime from "animejs"
import { PageContainer2, Card, Break, Space } from "../styles/global.styles"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, lightTheme, darkTheme } from "../styles/global.styles"

export default function BlogList() {


  const blogData = useBlogData()

 useEffect(() => {
    setTimeout(() => {
      anime({
        targets: '#dank',
        easing: 'linear',
        opacity: 1,
        duration: 400
      });
    }, 400);
    } , [])


  function renderBlogData() {
    

    return (

      <PageContainer2 id="dank">
  
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <>
                      
              <Link style={{fontWeight: "normal",}}to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
              <Card style={{marginBottom: "20px"}}>
              <div style={{padding: "15px"}}>
                  <div style={{paddingBottom: "10px",}}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p style={{color: 'black'}}>{blog.node.excerpt}</p>
                  </div>
                  </div>
                </Card>
              </Link>
              <Space/>
                </>
            )
          })}
      </PageContainer2>

    )
  }
  return (
    <section>
      <ul>{renderBlogData()}</ul>
    </section>
  )
}

