import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryListing = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Dashboard Gallery" />
      <h1>Welcome to dashboard Gallery</h1>
      <div>
        {data.allFile.nodes.map((node, i) => (
          <p key={i}>
            <Link to={node.fields.slug}>{node.fields.title}</Link>
            <br />
            <span>{node.fields.desc}</span>
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default GalleryListing

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "json" } }) {
      nodes {
        fields {
          title
          desc
          slug
        }
      }
    }
  }
`
