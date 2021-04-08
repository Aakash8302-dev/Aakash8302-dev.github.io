import React from 'react'
import {Row, Col,Container} from 'react-bootstrap'

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
            <Row>
                <Col md={5}></Col>
                <Col md={7}> 
                    <h4 id="about-title"><i class="fas about-icon fa-user"></i>   About Me</h4>
                    <p className="about-p">I am Aakash Arumugam a Ist year student currently pursuing a Bachelor in Information Technology at Sri Venkateswara College of Engineering, Chennai.</p>
                    
                    <a  target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1t9Ih_b3Fqh7kgDNNi85a_HjXNSGBUN9n/view?usp=sharing">
                        <button className="resume-btn" type="button">
                            Get my Resume
                        </button>
                    </a>
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default About
