import React from "react"
import "./womenright.scss"
import { Container, Row, Col } from "react-bootstrap"
import check from "../images/banner/check.png"

const Womenright = () => (
    <section id="womenright">
        <Container className="frame">
        <Row >
            <Col md={12} >
            <h1 className="title-center">We believe every woman has a right to safe, affordable birth control.</h1>
            </Col>
            <Col md={{span: 8, offset: 2}}>
            <Row>
            <Col md={4} className="features">
            <div className="circle"><img src={check} alt=""/></div> Accessible
            </Col>
            <Col md={4} className="features">
            <div className="circle"><img src={check} alt=""/></div> Discreet
            </Col>
            <Col md={4} className="features">
            <div className="circle"><img src={check} alt=""/></div> Confidental
            </Col>
            </Row>
            </Col>
        </Row>
        
        </Container>
    </section>
  )
  
  export default Womenright