import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col md={3} className="brand">
          <p>Maya.</p>
        </Col>
        <Col md={9}>
          <Row>
          <Col md={2}>
            <p>Terms of use</p>
          </Col>
          <Col md={2}>
            <p>Privacy Policy</p>
          </Col>
          <Col md={2}>
            <p>Terms of use</p>
          </Col>
          <Col md={2}>
            <p>FAQ</p>
          </Col>
          <Col md={2}>
            <p>Blog</p>
          </Col>
          <Col md={2}>
            <p>Get Started</p>
          </Col>
          </Row>
        </Col>
        <Col md={12} className="copyright">
          © 2020 Maya. All Rights reserved.
        </Col>
        
      </Row>
    </Container>
  </footer>
)

export default Footer