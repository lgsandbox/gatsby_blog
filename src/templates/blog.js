import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import anime from "animejs"
import { Wrapper } from "../styles/global.styles"

export default function Blog(props) {

  useEffect(() => {

    setTimeout(() => {

      anime({
        targets: '#blogPageFade',
        easing: 'linear',
        opacity: 1,
        duration: 400
      });

    }, 400);

    } , [])

  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const nextPage =  `/blog/${nextSlug}`

  function getNextSlug(slug) {

    const allSlugs = allBlogData.map(blog => {

      return blog.node.fields.slug

    })

    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]

    if(nextSlug !== undefined && nextSlug !== '') {

      return nextSlug

    } else {

      return allSlugs[0]

    }
  }

  return (
  
    <Layout>
      <Wrapper id="blogPageFade">
        <article >
          <div>
            <h2>{data.frontmatter.title}</h2>
            <h3 style={{paddingBottom: "20px"}}>{data.frontmatter.date}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.html }}/>
          <div>
            <h2>
              Written By: {data.frontmatter.author}
            </h2>
            <Link to={nextPage}>
              <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" width={"20px"} height={"20px"}>
                <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
              </svg>
            </Link>
          </div>
        </article>
      </Wrapper>
    </Layout>

  )

}

export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`
