import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Footer() {
    return <div className="footertable">
            <Container style={{marginTop: "70px"}}>
                <Row>   
                    <Col style={{marginLeft: "90px"}}>
                        <ul className="footerul">
                            <h6>CodeChef</h6>
                            <li><p>About Us</p></li>
                            <li><p>Leads</p></li>
                            <li><p>Team</p></li>
                            <li><p>Contact</p></li>
                        </ul>
                    </Col>
                    <Col style={{marginLeft: "90px"}}>
                        <ul className="footerurlsec">
                            <h6>Community</h6>
                            <li><p>FAQ</p></li>
                            <li><p>Reviews</p></li>
                        </ul>
                    </Col>
                    <Col style={{marginLeft: "90px"}}>
                        <ul className="footerurlthr">
                            <h6>Others</h6>
                            <li><p>Events</p></li>
                            <li><p>Resources</p></li>
                            <li><p>Newsletter</p></li>
                        </ul>
                    </Col>
                    <Col style={{marginLeft: "90px"}}>
                        <h6>Connect with us</h6>
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/facebook.png"} alt="facebook" />
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/snapchat.png"} alt="snapchat" />
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="linkedin" />
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/discord.png"} alt="discord" />
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="instagram" />
                        <img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/images/youtube.png"} alt="youtube" />
                    </Col>
                    <Col>
                        <img style={{marginTop: "30px", height: "130px", width: "130px"}} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="DYPIU Chapter logo" />
                    </Col>
                </Row>
                <hr style={{ color: "#fff" }} />
                <p style={{textAlign: "center"}}>Designed By Bhushan Dixit</p>
                <p style={{textAlign: "center"}}>Developed by<a style={{color: "#fff", textDecoration: "none"}} href="https://www.linkedin.com/in/chandandhamande/"> Chandan Dhamande</a> </p>
            </Container>
            
        </div>
    
}