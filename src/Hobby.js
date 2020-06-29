import React from 'react'
function Hobby(props) {
    return (
        <div className="card-body hobby ">
            <img className="hobbyimg" src={props.icon} alt="Hobby Logo"></img>
            <p className="hobbyname">{props.hobby}</p>
        </div>
    )
}

export default Hobby
