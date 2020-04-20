import React from "react"
import "./howitworks.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import logo from "../images/banner/logo.png"
import hero from "../images/banner/hero.jpg"

const Howitworks = () => (
  <section id="howitworks">
    <Container>
      <h1>How it works</h1>
      <Row>
        <Col md={4}>
         <div className="head">
            <div>
            <div className="circle">1.</div>
            <h2>You choose.</h2>
            </div>
            <div>
            </div>
         </div>
         <p>Select your medication, or get consultation from our in-house medical team. </p>
        </Col>
        <Col md={4}>
        <div className="head">
            <div>
            <div className="circle">2.</div>
            <h2>We prescribe.</h2>
            </div>
            <div>
            </div>
         </div>
          <p>A doctor will review your request and write a prescription to ensure your get the pills best suited to your needs.</p>
        </Col>
        <Col md={4}>
        <div className="head">
            <div>
            <div className="circle">3.</div>
            <h2>Delivered free.</h2>
            </div>
            <div>
            </div>
         </div>
          <p>We deliver your medication directly to you. On time, in a discreet package, and with no added costs.</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Howitworks