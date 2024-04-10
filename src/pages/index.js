import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { siteMetadata } from "../../gatsby-config"

export default function Home() {
  // console.log(data)
  // const {title,description} = data.site.siteMetadata

  return (
    <Layout>
      <section>
        <div>
          <h2 className="underline">Design</h2>
          <h3>DEvelop and Deploy</h3>
          <p>This work is in Munchen!</p>
        </div>
        <img src="/banner.png" alt="Site Banner" style={{maxWidth: '100%'}} />
      {/* <p>{ title } - { description } </p> */}
      </section>
    </Layout>
  )
}

// export const query = `graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
