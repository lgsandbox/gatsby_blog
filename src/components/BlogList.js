import React,  { useEffect } from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import anime from "animejs"
import { Wrapper, Card, Break } from "../styles/global.styles"

export default function BlogList() {

  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: '#blogListFade',
        easing: 'linear',
        opacity: 1,
        duration: 400
      });
    }, 400);
    } , [])

  const blogData = useBlogData()  

  function renderBlogData() {
    
    return (

      <Wrapper id="blogListFade">
  
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <>  
                <Link style={{fontWeight: "normal",}}to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                  <Card>
                    <div style={{padding: "15px"}}>
                      <div style={{paddingBottom: "10px",}}>
                        <h2>{blog.node.frontmatter.title}</h2>
                        <h3>{blog.node.frontmatter.date}</h3>
                        <p>{blog.node.excerpt}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
                <Break/>
              </>
            )
          })}

      </Wrapper>

    )
  }

  return (
    <section>
      <ul>{renderBlogData()}</ul>
    </section>
  )

}

