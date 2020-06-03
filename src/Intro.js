import React from 'react'
import './resume.css'
function Intro (props) {
  return (
    <div
      className='text-center p-2 mr-auto text-secondary info'
      // style={{ marginTop: '12%', border: 'white' }}
    >
      <p className='m-3 intro'>Hello! I'm Rishab</p>
      <p className='lead text-secondary discription'>
        I am a Student at Indian Institute of Information Technology Kota.<br></br>
        I am currently pursuing B.Tech in Computer Science Engineering.<br></br>
        I Love to Develop Web Apps and Mobile Apps.<br></br>
        Currently,I am Working on a Project to store accounts and contacts of a person.<br></br>
        I really enjoy being an Software Engineer.I would like to
        work in a company as a Software Engineer.
      </p>
    </div>
  )
}

export default Intro
