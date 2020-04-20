import React from "react"
import "./try.scss"
import { Container, Row, Col } from "react-bootstrap"
import star from "../images/star.png"
import PremiumButton from "./buttons/premiumbutton"
import womenholdspill from "../images/banner/try.jpg"
import bubble1 from "../images/banner/bubble-try1.svg"
import bubble2 from "../images/banner/bubble-try2.svg"





const Try = () => (
    <section id="try">
        <Container>
            <Row>
                <Col md={6}>
                <img className="image" src={womenholdspill} alt=""/>
                
                <img className="bubble1" src={bubble1} alt=""/>
                <img className="bubble2" src={bubble2} alt=""/>

                    
                </Col>
                <Col md={6}>
                <h1>Ready to give us a try?</h1>
                <p>Answer some quick health questions and our medical team will take care of the rest. Your birth control pills will arrive in no time and without shipping costs.</p>
                <PremiumButton to="/" text="Get started"/>

                </Col>
            </Row>
        </Container>
    </section>
  )
  
  export default Try