// pick mentor or mentee
import * as React from "react"
import '../style/identity.css'
import '../App.scss';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { Link } from "gatsby"
const MentorFormPage = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: '#198754', display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around' }}>
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
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Louis" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Current work</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="nursing" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Current Location</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Atlanta" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Desired work</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.1rem 0.15rem' }} placeholder="Data Scientist" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Desired Location</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.15rem 0.2rem' }} placeholder="Cal" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formLinkedin">
              <Form.Label style={{ marginBottom: '0.2rem' }}>Your linkedin profile</Form.Label>
              <Form.Control style={{ fontSize: '16px', padding: '0.15rem 0.2rem' }} placeholder="www.linkedin.com/lee" />
            </Form.Group>
            <div style={{ textAlign: 'center' }}><Link to="/mentor-list"><Button variant="success" style={{ fontSize: '16px' }} type="submit">
              Submit
            </Button></Link></div>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default MentorFormPage
