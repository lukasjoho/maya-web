import React from "react"
import "./yourbody.scss"
import { Container, Row, Col } from "react-bootstrap"
import arrow from "../images/banner/arrow-rightdown.svg"
import womenpointstopill from "../images/banner/pillpurse.jpg"
import PremiumButton from "./buttons/PremiumButton"
import bubble1 from "../images/banner/bubble-try1.svg"
import bubble2 from "../images/banner/bubble-try2.svg"




const Yourbody = () => (
    <section id="yourbody">
        <Container>
            <Row>
                <Col md={6}>
                <img className="image" src={womenpointstopill} alt=""/>
                <img className="bubble1" src={bubble1} alt=""/>
                <img className="bubble2" src={bubble2} alt=""/>
                </Col>
                <Col md={6}>
                    <h1>Your body. Your control.</h1>
                    <p>We believe every woman has a right to safe, affordable birth control. We eliminate barriers of the healthcare system with online consultation from our team of doctors. Get your prescription and birth control delivered right to your doorstep.</p>
                    <PremiumButton to="/" text="Get started"/>
                </Col>
                
            </Row>
        </Container>
    </section>
  )
  
  export default Yourbody