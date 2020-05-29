import React from 'react'

function Protest(props) {
    const { title, link, image, tagline, tech, logo } = props.data;
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={image} alt="Card cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{tagline}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {tech.map((a, b) => <li className="list-group-item" key={b}><i className={a}></i></li>)}
                </ul>
                <div className="card-body">
                    <a href={link} className="card-link">Project link</a>
                    {/* <a href="fefe" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}

export default Protest
