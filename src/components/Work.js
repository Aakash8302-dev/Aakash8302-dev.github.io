import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PortCard from './PortCard'
import tracker from '../images/tracker.png'

const Work = () => {
    return (
        <div id="work">
            <Container>
                <h2 className="work-title">My Recent Work</h2>
                <Row>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard image={tracker} alt="expense-tracker" href="https://aakash8302-dev.github.io/expense-tracking-app/"/>
                    </Col>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard />
                    </Col>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard />
                    </Col>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard />
                    </Col>
                    <Col sm={12} md={4} className="card-wrapper">
                        <PortCard />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Work
