import React from 'react'

function Skill(props) {
    return (
            <span className="skill">
            <div className="skillimgdiv" style={{ animation: `${props.animation}`}} >
                    <img className="skillimg" src={props.skillimg} alt={props.name + " logo"}></img>
                </div>
                <div
                    className="lead text-light font-weight-bold text-center p-2"
                    style={{
                        // display: "inline-block",
                        float: "right",
                        fontSize: "1.25vw",
                        width: "60%",
                        height: "100%",
                        marginTop: "2%"
                    }}
                >
                    {props.name}
                    <p className="m-2 text-secondary font-weight-light">{props.level}</p>
                </div>
            </span>
    )
}

export default Skill
