import React from 'react'
import './resume.css'
function Hobby(props) {
    return (
        <div className="card-body hobby ">
            <img className="hobbyimg" src={props.icon} alt="Hobby Logo"></img>
            <p className="lead hobbyname">{props.hobby}</p>
        </div>
    )
}

export default Hobby
