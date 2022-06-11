import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"


export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
  
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <div>
                  <div>
             
                  </div>
                  <div style={{paddingBottom: "5px"}}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={"andanotherone"}>{renderBlogData()}</ul>
    </section>
  )
}

