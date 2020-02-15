import React from 'react'
import './resume.css'
function Intro(props) {
    return (
        <div
          className="card text-center p-2 mr-auto text-secondary bg-light"
          style={{ marginTop: "11%", border: "white" }}
        >
          <h2 className="intro m-3">Hello! I'm Rishab</h2>
          <p className="lead text-secondary discription">
            I am Student at Indian Institute of Information Technology Kota.
            <br></br>I am currently pursuing B.Tech in Computer Science
            Engineering.<br></br>I Love to Develop Web Apps and Mobile
            Apps.Currently,I am <br></br>
            Working on a Project to store accounts and contacts of a person.
            <br></br>I really enjoy being an Software Engineer.I would like to
            <br></br>
            work in a company as a Software Engineer.
          </p>
        </div>
    )
}

export default Intro