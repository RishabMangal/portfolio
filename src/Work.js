import React from "react";

const Work = (props) => {
  return (
    <div className="row">
      <div
        className="col-sm-6 mr-0"
        style={{ animation: `${props.data.animationr}` }}
      >
        <div className="p-4">
          <a className="" target="blank" href={props.data.link}>
            <img
              src={props.data.image}
              alt="project-snapshot"
              className="project-image"
              style={{
                width: "100%",
                filter: "drop-shadow(8px 8px 10px gray)",
              }}
            ></img>
          </a>
        </div>
      </div>
      <div className="col-sm-6 mr-0 project-info">
        <div className="p-4">
          <div className="display-4 text-center m-4">
            {props.data.title}
            <span className="certi-container">
              <a
                href={`https://rishus-apis.herokuapp.com/certi/${props.data.slug}`}
                target="__blank"
                className="certi-logo"
              >
                <i className="fas fa-award certi-logo"></i>
              </a>
            </span>
          </div>
          <p
            className="text-secondary text-center m-4"
            style={{ fontFamily: "cursive", fontStyle: "italic" }}
          >
            {props.data.tagline}
          </p>
          <div className="lead m-4">
            <span className="label m-2">Role : {"   "}</span>
            <span className="text-primary">{props.data.role}</span>
          </div>
          <div className="lead m-4">
            <span className="label m-2">Duration : {"   "}</span>
            <span className="text-primary">{props.data.duration}</span>
          </div>
          <div className="lead m-4">
            <span className="label m-2">Project URL : {"   "}</span>
            <a className="text-primary" target="blank" href={props.data.link}>
              {props.data.link}
            </a>
          </div>
          <div className="text-left font-weight-normal m-4">
            <span className="label m-2">Tech Used : </span>
            {props.data.tech.map((x, i) => {
              return (
                <i
                  key={i}
                  className={x}
                  style={{ fontSize: "200%", color: "#E44D26" }}
                ></i>
              );
            })}
            {props.data.logo.length
              ? props.data.logo.map((l, i) => (
                  <img
                    src={l}
                    key={i}
                    alt={`${i + 1}-logo`}
                    className="tech-logo lik"
                  ></img>
                ))
              : null}
          </div>
          <a href={props.data.link} target="blank">
            <button className="btn btn-primary check float-right">
              {props?.data?.action || "Check this Out"}
              <i className="fas fa-bomb fa-1x mx-2 icon-3d "></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
