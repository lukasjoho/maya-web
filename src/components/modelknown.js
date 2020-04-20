import React from "react"
import "./modelknown.scss"
import { Container, Row, Col } from "react-bootstrap"
import arrow from "../images/banner/arrow-rightdown.svg"
import wallstreet from "../images/banner/wallstreet.png"
import nbc from "../images/banner/nbc.png"
import forbes from "../images/banner/forbes.png"
import newyorktimes from "../images/banner/newyorktimes.png"
import womenshealth from "../images/banner/womenshealth.png"


const Modelknown = () => (
    <section id="modelknown">
        <Container>
            <h1>Model known from</h1>
            <Row>
                <Col md={12} className="firms">
                <img src={wallstreet} alt=""/>
                <img src={nbc} alt=""/>
                <img src={forbes} alt=""/>
                <img src={newyorktimes} alt=""/>
                <img src={womenshealth} alt=""/>
                </Col>
            </Row>
        </Container>
    </section>
  )
  
  export default Modelknown