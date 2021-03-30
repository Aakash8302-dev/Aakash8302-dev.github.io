import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Skill from './Skill'

const Cv = () => {
    return (
        <div id="cv">
            <Container className="section">
                <Row >
                    <Col md={4} sm={12}>
                        <h4 className="cv-headings"><i class="fas cv-icon fa-graduation-cap"></i>EDUCATION  </h4>
                    </Col>
                    <Col md={8} sm={12}>
                        <div className="cv-info">
                            <h2 className="cv-side-heading">College</h2>
                            <p className="cv-sub">Information Technology</p>
                            <p>I'm currently pursuing my undergraduation in Sri Venkateswara College of Engineering</p>
                        </div>
                        <div className="cv-info">
                            <h2 className="cv-side-heading">School</h2>
                            <p className="cv-sub">PSBB Milennium</p>
                            <p>I'm currently pursuing my undergraduation in Sri Venkateswara College of Engineering</p>
                        </div>
                        
                    </Col>
                </Row>
                <hr />
                <Row className="section">
                    <Col md={4}>
                        <h4 className="cv-headings"><i class="fas cv-icon fa-tools"></i>SKILLS </h4>
                    </Col>
                    <Col md={8}>
                        <p className="cv-sub">Here are my few skills</p>
                        <Row className="skill-wrapper">
                            <Skill title="React" />
                            <Skill title="MongoDB" />
                            <Skill title="Bootstrap" />
                            <Skill title="Nodejs" />
                            <Skill title="Express" />
                            <Skill title="Javascript" />
                            <Skill title="Nodejs" />
                            <Skill title="HTML" />
                            <Skill title="CSS" />
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </div>
    )
}

export default Cv
