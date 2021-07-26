import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

export default function Team() {
    
    return <div className="team">
        <div className="teamheading">
            <h2>OUR TEAM</h2>
            <h5>Meet our team, not your average training dudes.</h5>
        </div>
        <div className="members">
            <Container>
                <Row>
                    <Col>
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/Aakriti.jpg"} alt="president" style={{ height: "250px", width: "250px", borderRadius: "50%" }} />
                            <p style={{fontFamily: "Roboto, san-serif", fontWeight: "400", fontSize: "20px", marginTop: "30px"}}>President</p>
                        </figure>
                    </Col>
                    <Col>
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/chandan.png"} alt="cplead" style={{ height: "250px", width: "250px" }} />
                            <p style={{fontFamily: "Roboto, san-serif", fontWeight: "400", fontSize: "20px", marginTop: "30px"}}>CP Lead</p>
                        </figure>
                    
                    </Col>
                </Row>
                <Row style={{marginTop: "80px"}}>
                    <Col>
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/Jyoti.jpeg"} alt="oamlead" style={{ height: "250px", width: "250px", borderRadius: "50%" }} />
                            <p style={{fontFamily: "Roboto, san-serif", fontWeight: "400", fontSize: "20px", marginTop: "30px"}}>OAM Lead</p>
                        </figure>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/images/Harsh.jpeg"} alt="eventslead" style={{ height: "250px", width: "250px", borderRadius: "50%" }} />
                        <p style={{fontFamily: "Roboto, san-serif", fontWeight: "400", fontSize: "20px", marginTop: "30px"}}>Events Lead</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </div>
}