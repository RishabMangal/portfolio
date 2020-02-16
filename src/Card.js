import React from 'react'
import './resume.css'
function Card(props) {
    return (
        <div>
            <div
                className="container-fluid "
                style={{
                    width: "60%",
                    height: "60vh",
                    marginTop: "10%",
                    padding: "1px"
                }}
            >
                <div
                    className="card container-fluid"
                    style={{
                        backgroundColor: "yellow",
                        backgroundImage: `url(${props.profilePics})`,
                        backgroundSize: "cover",
                        width: "50%",
                        height: "85%",
                        padding: "0px",
                        display: "inline-block",
                        maxHeight: "70vh",
                        verticalAlign: "top",
                        animation:"slideright 2s"
                        // overflow:"auto"
                    }}
                >
                    <img
                        src={props.profilePics}
                        alt="batman"
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "inline-block",
                            margin: "0px",
                            opacity: "0",
                            padding: "0px",
                        }}
                    ></img>
                </div>
                <div
                    className="card container-fluid"
                    style={{
                        height: "85%",
                        width: "50%",
                        paddingTop: "6%",
                        paddingLeft: "1%",
                        paddingRight: "1%",
                        // height: "80%",
                        // backgroundColor: "white",
                        // marginTop:"6%",
                        display: "inline-block",
                        animation: "slideleft 2s"
                        // overflow:"auto"

                    }}
                >
                    <ul className="">
                        <li className="text-dark text-center lead font-weight-bold">
                            Rishab Mangal
                </li>
                        <li className="text-secondary font-weight-bold text-center">
                            Software Engineer
                </li>
                        <li className="text-dark">Phone:</li>
                        <li className="text-secondary" style={{ paddingTop: "0px" }}>
                            9928799243
                </li>
                        <li className="text-dark">Email:</li>
                        <li className="text-secondary">rishabhmangal1@gmail.com</li>
                        <li className="text-dark">Address:</li>
                        <li className="text-secondary">Mnit Japiur</li>
                        <li className="text-dark">Birthday:</li>
                        <li className="text-secondary">20th Oct 1999</li>
                    </ul>
                </div>
                <div
                    className="container-fluid"
                    style={{
                        width: "100%",
                        height: "15%",
                        backgroundColor: "#043869",
                        paddingBottom: "1%",
                        paddingTop: "2%",
                        paddingLeft: "25%",
                        // overflow: "auto",
                        margin: "0px",
                        animation: "slideup 2s"

                    }}
                >
                    {/* <ul> */}
                    <a href="mailto:rishabhmangal1@gmail.com?subject=Awesome App">
                        <i className="fas fa-envelope px-3 mr-auto"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rishab-m-00b60a103/">
                        <i className="fab fa-linkedin px-3 mr-auto"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=9928799243&text=Hello">
                        <i className="fab fa-whatsapp px-3 mr-auto"></i>
                    </a>
                    <a href="https://www.facebook.com/rishabh.mangal.77">
                        <i className="fab fa-facebook-square px-3 mr-auto"></i>
                    </a>
                    <a href="https://www.instagram.com/rishabhmangal1/">
                        <i className="fab fa-instagram px-3 mr-auto"></i>
                    </a>
                    <a href="https://github.com/RishabMangal">
                        <i className="fab fa-github px-3 mr-auto"></i>
                    </a>
                    <a href="https://www.github.com">
                        <i className="fab fa-google-plus px-3 mr-auto"></i>
                    </a>
                    {/* </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Card
