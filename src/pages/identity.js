// pick mentor or mentee
import * as React from "react"
import '../style/identity.css'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const IdentityPage = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <script type="application/ld+json">{`{"@context": "http://schema.org"}`}</script>
          <style type="text/css">{`a[href^="https://www.cnzz.com"] {display: none;} html {font-size: 10vw; max-width: 750px;} @media screen and (min-width: 750px){html {font-size: 75px}}`}</style>
          <title>who are you</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <button>I 'd like to be Mentor</button>
        <button>I 'd like to be Mentee</button>
      </div>
    </Layout>
  )
}

export default IdentityPage