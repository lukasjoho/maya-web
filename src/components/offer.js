import React from "react"
import "./offer.scss"
import { Container, Row, Col } from "react-bootstrap"
import star from "../images/star.png"
import PremiumButton from "./buttons/premiumbutton"
import pillbox from "../images/banner/pillbox.jpg"
import yasmin from "../images/banner/yasmin.png"
import levora from "../images/banner/levora.png"
import aviane from "../images/banner/aviane.png"
import alesse from "../images/banner/alesse.png"
import bubble1 from "../images/banner/bubble-offer1.svg"
import bubble2 from "../images/banner/bubble-offer2.svg"



const Offer = () => (
    <section id="offer">
        <Container>
            <Row>
                <Col md={6}>
                    <img className="image" src={pillbox} alt=""/>
                    <img className="bubble1" src={bubble1} alt=""/>
                    <img className="bubble2" src={bubble2} alt=""/>
                </Col>
                <Col md={6}>
                <div className="circles">
                    <div className="circle"><img src={yasmin} alt=""/></div>
                    <div className="circle"><img src={levora} alt=""/></div>
                    <div className="circle"><img src={aviane} alt=""/></div>
                    <div className="circle"><img src={alesse} alt=""/></div>
                </div>

                <h1>We offer the leading birth control brands</h1>
                <p>Only the best and most widely used brands are good enough for us. We focus on finding the perfect medication for your individual body. Your health is our highest priority.</p>
                <PremiumButton to="/" text="Get started"/>

                </Col>
            </Row>
        </Container>
    </section>
  )
  
  export default Offer