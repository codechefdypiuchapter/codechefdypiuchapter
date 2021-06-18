import React from "react";

const mission = "The mission of CodeChef DYPIU Chapter is to empower students, build a robust Competitive Programming culture on campus and to help students become better problem solvers fostering learning and professional development."

export default function Sectionone() {
    return <div className="sectionone">
        <div className="text">
            <h1 className="title">Code Chef <br /> DYPIU Chapter</h1>
            <h3 className="tagline">Powered by Data Structures and Algorithms</h3>
            <p className="mission">{mission}</p>
        </div>
        
        <img className="vectorimg" src={process.env.PUBLIC_URL + "/images/vector.png"} alt="vector" />
        
        <div className="fakebutton" >
            <p style={{padding: "0px"}}>Let's start with us</p>
        </div>
        
        <div className="oneliner">
            <h5 >"In order to be irreplaceable, one must always be different"</h5>
            <p>~Coco Chanel</p>
            <img src={ process.env.PUBLIC_URL + "/images/chef.png"} alt="The chef" />
        </div>
    </div>
}