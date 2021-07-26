import React from "react";
import Navbar from "./Navbar";
import Sectionone from "./Sectionone";
import AboutUs from "./Aboutus";
import Team from "./Team";
import Footer from "./Footer";

export default function App() {
    return <div className="container">
        <Navbar />
        <Sectionone />
        <AboutUs />
        <Team />
        <Footer />
    </div>  
}