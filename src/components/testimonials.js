import React from "react"
import "./testimonials.scss"
import { Container, Row, Col } from "react-bootstrap"
import star from "../images/star.png"
import arrow from "../images/banner/arrow-rightdown.svg"
import womenpointstopill from "../images/banner/womenpointstopill.jpg"
import bubble1 from "../images/banner/bubble-patients1.svg"
import bubble2 from "../images/banner/bubble-patients2.svg"





const Testimonials = () => (
    <section id="testimonials">
        <Container>
            <Row>
                <Col md={6}>
                    <h1>What our patients are saying</h1>
                    <p>Don’t just take our word for it. Hear directly from our patients what the Maya experience is like.</p>
                    <img src={arrow} alt=""/>
                </Col>
                <Col md={6}>
                    <img className="image" src={womenpointstopill} alt=""/>
                    <img className="bubble1" src={bubble1} alt=""/>
                    <img className="bubble2" src={bubble2} alt=""/>
                </Col>
            </Row>
            <Row className="background">
                <Col md={6}>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <p>Everything was extremely professional. From the prescription that includes a questionnaire to the delivery. The package is discreet and arrives on time. Already told my girlfriends about the service.</p>
                <h2>Murni</h2>
                </Col>
                <Col md={6}>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <p>At first I was skeptical about ordering birth control pills online. However, everything went down as promised. The process is simple and it saves me a lot of time. I can only recommend it to other women.</p>
                <h2>Diah</h2>
                </Col>
            </Row>
        </Container>
    </section>
  )
  
  export default Testimonials