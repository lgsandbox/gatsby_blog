import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import { useEffect } from "react"
import anime from "animejs"
import { PageContainer2 } from "../styles/global.styles"

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
              <Link style={{fontWeight: "normal"}}to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <div>
                  <div style={{paddingBottom: "5px"}}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </div>
              </Link>
              
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

