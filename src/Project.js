import React from 'react'

function Project(props) {
    return (
        <div className="row bg-light project-cover p-0">
            <div className="col-sm-4 p-0 m-0 project-img-container" style={{ animation: `${props.data.animationr}` }}>
                <a className="" target="blank" href={props.data.link}>
                    <img
                        src={props.data.image}
                        alt="project-snapshot"
                        className="project-image"
                    ></img>
                </a>
            </div>
            <div className="col-sm-8 display-4 bg-light text-center font-italic m-0 p-0" style={{ animation: `${props.data.animationl}`}}>
                {props.data.title}
                <p className="lead text-secondary p-2 m-3 my-4 font-weight-light ">
                    {props.data.tagline}
                </p>
                <div className="p-2 m-1 text-left font-weight-normal lik">
                    Link -
                        <span className="lead text-secondary">
                        <a className="text-secondary text-center" target="blank" href={props.data.link}>
                            {props.data.link}
                        </a>
                    </span>
                </div>
                <div className="p-2 m-1 bg-light text-left font-weight-normal lik">
                    <span style={{ width: "30%" }}>Tech Used:</span>
                    <span style={{ width: "70%" }}>
                        {
                            props.data.tech.map((x, i) => {
                                return (<i key={i} className={x} style={{ fontSize: "200%", color: "#E44D26" }}></i>)
                            })
                        }
                        {props.data.logo ? (
                            <img
                                src={props.data.logo}
                                alt="mongoDB"
                                className="bg-light tech-logo"
                            ></img>) : null}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Project
