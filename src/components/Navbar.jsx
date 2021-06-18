import React from "react";

export default function Navbar() {
    return <div>
        <nav className="navbar">
            <img style={{ height: "75px", width: "75px" }} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
            <h6 className="aboutus">AboutUS</h6>
            <h6 className="faq">FAQ</h6>
        </nav>
    </div>
    
}