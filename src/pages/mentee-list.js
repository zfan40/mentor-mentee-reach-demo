// pick mentor or mentee
import * as React from "react"
import '../style/identity.css'
import '../App.scss';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Card, Button, Image } from 'react-bootstrap'
// pictures
import baloon from "../images/baloon.png"
import mentee1 from "../images/plant.jpeg"
import mentee2 from "../images/plant.jpeg"
import mentee3 from "../images/plant.jpeg"
import mentee4 from "../images/plant.jpeg"

const IdentityPage = () => {
  function jumpTo(url = "https://www.linkedin.com/in/ziwen-fan-224120") {
    window.location.href = url
  }
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

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: "wrap", paddingTop: '3.5rem' }}>
          <Image src={baloon} style={{ position: 'absolute', width: '100%', top: '0' }} />
          <p style={{ position: 'absolute', width: '100%', top: '1.5rem', fontSize: '24px', margin: '1rem 0rem', left: '0.4rem', background: 'white' }}>
            Your influence matters!
          </p>
          <Card style={{ width: '4.5rem', marginBottom: '0.4rem' }}>
            <Card.Img onClick={() => { jumpTo() }} variant="top" src={mentee1} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                name:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                current work:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                prefered work:
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '4.5rem', marginBottom: '0.4rem' }}>
            <Card.Img onClick={() => { jumpTo() }} variant="top" src={mentee2} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                name:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                past location:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                current location:
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '4.5rem', marginBottom: '0.4rem' }}>
            <Card.Img onClick={() => { jumpTo() }} variant="top" src={mentee3} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                name:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                current work:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                prefered work:
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '4.5rem', marginBottom: '0.4rem' }}>
            <Card.Img onClick={() => { jumpTo() }} variant="top" src={mentee4} />
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                name:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                current work:
              </Card.Text>
              <Card.Text style={{ fontSize: '14px', marginBottom: '14px' }}>
                prefered work:
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default IdentityPage