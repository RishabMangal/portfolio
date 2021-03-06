import React from "react";

function Skill(props) {
  return (
    <div className="skill bg-light">
      <div className="skillimgdiv" style={{ animation: `${props.animation}` }}>
        <img
          className="skillimg"
          src={props.skillimg}
          alt={props.name + " logo"}
        ></img>
      </div>
      <div className="lead font-weight-bold text-center p-2">
        <p>{props.name}</p>
        <p className="m-2 text-secondary font-weight-light">{props.level}</p>
      </div>
    </div>
  );
}

export default Skill;
