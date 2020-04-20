import React from "react"
import "./banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import logo from "../images/banner/logo.png"
import hero from "../images/banner/hero.jpg"
import arrowdown from "../images/banner/arrow-down.svg"
import bubble1 from "../images/banner/bubble-banner1.svg"
import bubble2 from "../images/banner/bubble-banner2.svg"

const Banner = () => (
  <section id="banner">
    <Container>
      <Row>
        <Col md={6} className="banner-text">
          <h1>Your birth control pills prescribed & delivered to your doorstep</h1>
          <p>Affordable and discreet access to birth control has never been easier.</p>
          <PremiumButton to="/" text="Get started"/>
          <img src={arrowdown} alt="Thumbnail" className="arrowdown"/>
        </Col>
        <Col md={6} className="showcase">
          <img src={hero} alt="Thumbnail" className="banner-image"/>
          <img className="bubble1" src={bubble1} alt=""/>
          <img className="bubble2" src={bubble2} alt=""/>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Banner