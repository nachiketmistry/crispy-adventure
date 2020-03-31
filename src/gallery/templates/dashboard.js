import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import DashboardCore from "@splunk/dashboard-core"
import CloudPreset from "@splunk/dashboard-presets/CloudPreset"

export default ({ data }) => {
  const node = data.allFile.nodes.length && data.allFile.nodes[0].fields
  return (
    <Layout>
      <h1>{node.title}</h1>
      <p>{node.desc}</p>
      <div>
        <DashboardCore
          width="100%"
          height="100%"
          preset={CloudPreset}
          definition={JSON.parse(node.definition)}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allFile(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        fields {
          definition
          title
          desc
          slug
        }
      }
    }
  }
`
