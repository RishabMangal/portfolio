import React from 'react'

function Skill(props) {
    return (
            <span className="p-3 skill">
                <img className="skillimg" src={props.skillimg} alt="html5"></img>
                <div
                    className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                    style={{
                        display: "inline-block",
                        float: "right",
                        fontSize: "1.25vw"
                    }}
                >
                    {props.name}
                <p className="text-secondary font-weight-light">{props.level}</p>
                </div>
            </span>
    )
}

export default Skill
