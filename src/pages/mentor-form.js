// pick mentor or mentee
import * as React from "react"
import '../style/identity.css'
import '../App.scss';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Form, Button } from 'react-bootstrap'
import { Link } from "gatsby"
const MentorFormPage = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: '#0dcaf0', display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <script type="application/ld+json">{`{"@context": "http://schema.org"}`}</script>
          <style type="text/css">{`a[href^="https://www.cnzz.com"] {display: none;} html {font-size: 10vw; max-width: 750px;} @media screen and (min-width: 750px){html {font-size: 75px}}`}</style>
          <title>who are you</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>
          <Form style={{ backgroundColor: '#fff', width: '8rem', fontSize: '18px', padding: '0.4rem', borderRadius: '0.2rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Name</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Lee" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Past work</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Web developer" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Past Location</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Atlanta" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Current work</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Movie Star" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Current Location</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.15rem 0.2rem' }} placeholder="Hollywood" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formLinkedin">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Your linkedin profile</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.15rem 0.2rem' }} placeholder="www.linkedin.com/lee" />
            </Form.Group>
            <div style={{ textAlign: 'center' }}><Link to="/mentee-list"><Button variant="info" style={{ fontSize: '16px' }} type="submit">
              Submit
            </Button></Link></div>

          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default MentorFormPage
