// pick mentor or mentee
import * as React from "react"
import '../style/identity.css'
import '../App.scss';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Card, Button } from 'react-bootstrap'
import { Link } from "gatsby"
// pictures
import mentor from "../images/pot.jpeg"
import mentee from "../images/plant.jpeg"
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
        <div style={{
          display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around',
          background: 'linear-gradient(31deg, rgba(25,135,84,1) 0%, rgba(199,208,115,1) 50%, rgba(0,255,254,1) 100%)'
        }}>
          <Card style={{ width: '4.5rem' }}>
            <Card.Img variant="top" src={mentor} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '16px', marginBottom: '16px' }}>
                to share my experience and knowledge
              </Card.Text>
              <Link to="/mentor-form"><Button variant="info" size="sm" style={{ fontSize: '20px' }}>Start</Button></Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '4.5rem' }}>
            <Card.Img variant="top" src={mentee} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '16px', marginBottom: '16px' }}>
                to get some advice on career transformation
              </Card.Text>
              <Link to="/mentee-form"><Button variant="success" size="sm" style={{ fontSize: '20px' }}>Start</Button></Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default IdentityPage