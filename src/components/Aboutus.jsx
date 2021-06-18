import React from "react"

const aboutUS = "CodeChef College Chapters are the programming clubs run and maintained by the official chapter leaders and mentored by CodeChef. We aim to make learning competitive programming accessible for students of DYPIU. We help students express their opinions to a group and achieve goals working in teams. We enable students to learn together with other College Students in the Community.We provide opportunities and exposure to students on the campus."

export default function AboutUs() {
    return <div className="aboutusdiv">
        <h2>About US</h2>
        <h4>CodeChef College Chapters are the programming clubs</h4>
        <div style={{float: "left"}}>
            <p>{ aboutUS}</p>
        </div>
        <div style={{float: "right"}}>
            <img src={ process.env.PUBLIC_URL + "/images/logo.png"} alt="DYPIU chapter Logo" />
        </div>
    </div>
}