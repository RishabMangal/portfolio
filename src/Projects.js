import React from 'react'
import portfolio from './logo/portfolio.png'
import mongodb from "./logo/mongodb.png";
import todo from "./logo/todo.jpg"
import contactmanager from './logo/contactmanager.png'
import feed from './logo/feed.jpg'
import './resume.css'
function Projects() {
    return (
        <div>
            <div className="card  my-5 " id="projects">
                <h2
                    className="text-center display-4 p-3 my-3 card"
                    style={{ backgroundColor: "#F1F1F1" }}
                >
                    Projects
          </h2>
                {/* <Project img={node}></Project> */}
                {/* -----------------------------------To-Do app--------------------------------------------------------------------------------------- */}
                <div
                    className="my-4"
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                        marginTop: "1%",
                        marginLeft: "15%",
                        marginRight: "15%",
                        borderRadius: "50px",
                        padding: "0.0625%"
                        //   borderBottomRightRadius: "50px"
                    }}
                >
                    <a
                        className=""
                        style={{ textDecoration: "none" }}
                        target="blank"
                        href="https://tooo-dooo.herokuapp.com/"
                    >
                        <img
                            src={todo}
                            alt="project-snapshot"
                            className=""
                            style={{
                                width: "25%",
                                borderRight: "1px dashed gray",
                                borderRadius: "10px",
                                borderTopLeftRadius: "11%",
                                borderBottomLeftRadius: "11%",
                                marginTop: "0.2%"
                            }}
                        ></img>
                    </a>
                    <div
                        className="display-4 p-3 bg-light text-center font-italic"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            width: "75%",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            margin: "0px"
                        }}
                    >
                        To-do App
              <p
                            className="lead text-secondary p-2 m-3 my-4 font-weight-light "
                        // style={{ display: "block",fontSize:"40px" }}
                        >
                            A simple To-Do App to Store your todo list.
              </p>
                        <div
                            className="p-2 m-1 text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            Link -{" "}
                            <span className="lead text-secondary">
                                <a
                                    className="text-secondary text-center"
                                    style={{ textDecoration: "none" }}
                                    target="blank"
                                    href="https://tooo-dooo.herokuapp.com/"
                                >
                                    https://tooo-dooo.herokuapp.com/
                  </a>
                            </span>
                        </div>
                        <div
                            className="p-2 m-1 bg-light text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            <span style={{ width: "30%" }}>Tech Used:</span>
                            <span style={{ width: "70%" }}>
                                <i
                                    className="fab fa-html5 px-2 mr-2 font-weight-light"
                                    style={{ fontSize: "200%", color: "#E44D26" }}
                                ></i>
                                <i
                                    className="fab fa-css3-alt px-2 mr-2 text-primary font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-js-square px-2 mr-2 text-warning font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-node px-2 mr-2 text-success font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <img
                                    src={mongodb}
                                    alt="mongoDB"
                                    className="bg-light"
                                    style={{
                                        height: "2.5vw",
                                        padding: "2px",
                                        margin: "2px",
                                        marginBottom: "0px"
                                    }}
                                ></img>
                            </span>
                        </div>
                    </div>
                </div>

                {/* ---------------------Contact Manager--------------------------------------------------------------------------------------------------------- */}

                <div
                    className="my-4"
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                        marginTop: "1%",
                        marginLeft: "15%",
                        marginRight: "15%",
                        borderRadius: "50px",
                        padding: "0.0625%"
                        //   borderBottomRightRadius: "50px"
                    }}
                >
                    {" "}
                    <a
                        className=""
                        style={{ textDecoration: "none" }}
                        target="blank"
                        href="https://rishabmangal.github.io/Contact-Manager/#/"
                    >
                        <img
                            src={contactmanager}
                            alt="project-shot"
                            className="px-1 mr-auto"
                            style={{
                                width: "25%",
                                borderRight: "1px dashed gray",
                                borderRadius: "10px",
                                borderTopLeftRadius: "11%",
                                borderBottomLeftRadius: "11%",
                                marginTop: "0.2%"
                            }}
                        ></img>
                    </a>
                    <div
                        className="display-4 p-3 bg-light text-center font-italic"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            width: "75%",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            margin: "0px"
                        }}
                    >
                        Contact Manager
              <p
                            className="lead text-secondary p-2 m-3 my-4 font-weight-light "
                        // style={{ display: "block",fontSize:"40px" }}
                        >
                            A simple App to Store your Contacts list.
              </p>
                        <p
                            className="p-2 m-1 text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            Link -{" "}
                            <span className="lead text-secondary">
                                <a
                                    className="text-secondary text-center"
                                    style={{ textDecoration: "none" }}
                                    target="blank"
                                    href="https://rishabmangal.github.io/Contact-Manager/#/"
                                >
                                    https://rishabmangal.github.io/Contact-Manager/#/
                  </a>
                            </span>
                        </p>
                        <p
                            className="p-2 m-1 bg-light text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            <span style={{ width: "30%" }}>Tech Used:</span>
                            <span style={{ width: "70%" }}>
                                <i
                                    className="fab fa-html5 px-2 mr-2 font-weight-light"
                                    style={{ fontSize: "200%", color: "#E44D26" }}
                                ></i>
                                <i
                                    className="fab fa-css3-alt px-2 mr-2 text-primary font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-js-square px-2 mr-2 text-warning font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-node px-2 mr-2 text-success font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-react px-2 mr-2 text-primary font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                            </span>
                        </p>
                    </div>
                </div>
                {/* -------------------------------------------Feedback Software------------------------------------------------------------------------ */}

                <div
                    className="my-4"
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                        marginTop: "1%",
                        marginLeft: "15%",
                        marginRight: "15%",
                        borderRadius: "50px",
                        padding: "0.0625%"
                        //   borderBottomRightRadius: "50px"
                    }}
                >
                    {" "}
                    <a
                        className=""
                        style={{ textDecoration: "none" }}
                        target="blank"
                        href="https://github.com/RishabMangal/FEEDBACK-SOFTWARE"
                    >
                        <img
                            src={feed}
                            alt="project-shot"
                            className="px-1 mr-auto"
                            style={{
                                width: "25%",
                                borderRight: "1px dashed gray",
                                borderRadius: "10px",
                                borderTopLeftRadius: "11%",
                                borderBottomLeftRadius: "11%",
                                marginTop: "0.1%"
                            }}
                        ></img>
                    </a>
                    <div
                        className="display-4 p-3 bg-light text-center font-italic"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            width: "75%",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            margin: "0px"
                            // padding:"5%"
                        }}
                    >
                        Feedback Software
              <p
                            className="lead text-secondary p-2 m-3 my-4 font-weight-light "
                        // style={{ display: "block",fontSize:"40px" }}
                        >
                            A simple App to Store Customers Feedback For a Cafe.
              </p>
                        <p
                            className="p-2 m-1 text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            Link -{" "}
                            <span className="lead text-secondary">
                                <a
                                    className="text-secondary text-center"
                                    style={{ textDecoration: "none" }}
                                    target="blank"
                                    href="https://github.com/RishabMangal/FEEDBACK-SOFTWARE"
                                >
                                    https://github.com/RishabMangal/FEEDBACK-SOFTWARE
                  </a>
                            </span>
                        </p>
                        <p
                            className="p-2 m-1 bg-light text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            <span style={{ width: "30%" }}>Tech Used:</span>
                            <span style={{ width: "70%" }}>
                                <i
                                    className="fab fa-python px-2 mr-2 text-warning font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                            </span>
                        </p>
                    </div>
                </div>
                {/* -----------------------------------------Portfolio-------------------------------------------------------------------------------------------------- */}

                <div
                    className="my-3"
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                        marginTop: "1%",
                        marginLeft: "15%",
                        marginRight: "15%",
                        borderRadius: "50px",
                        padding: "0.0625%"
                        //   borderBottomRightRadius: "50px"
                    }}
                >
                    {" "}
                    <a
                        className=""
                        style={{ textDecoration: "none" }}
                        target="blank"
                        href="https://rishabmangal.netlify.com"
                    >
                        <img
                            src={portfolio}
                            alt="project-shot"
                            className="px-1 mr-auto"
                            style={{
                                width: "25%",
                                borderRight: "1px dashed gray",
                                borderRadius: "10px",
                                borderTopLeftRadius: "11%",
                                borderBottomLeftRadius: "11%",
                                marginTop: "0.2%"
                            }}
                        ></img>
                    </a>
                    <div
                        className="display-4 p-3 bg-light text-center font-italic"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            width: "75%",
                            borderTopRightRadius: "50px",
                            borderBottomRightRadius: "50px",
                            margin: "0px"
                        }}
                    >
                        Portfolio
              <p
                            className="lead text-secondary p-2 m-3 my-4 font-weight-light "
                        // style={{ display: "block",fontSize:"40px" }}
                        >
                            A simple App to Showcase my CV and Skills.
              </p>
                        <p
                            className="p-2 m-1 text-left font-weight-normal"
                            style={{ display: "block", fontSize: "1.35vw" }}
                        >
                            Link -{" "}
                            <span className="lead text-secondary">
                                <a
                                    className="text-secondary text-center"
                                    style={{ textDecoration: "none" }}
                                    target="blank"
                                    href="https://rishabmangal.netlify.com"
                                >
                                    https://rishabmangal.netlify.com
                  </a>
                            </span>
                        </p>
                        <p
                            className="p-2 m-1 bg-light text-left font-weight-normal"
                            style={{ display: "block", fontSize: "30px" }}
                        >
                            <span style={{ width: "30%" }}>Tech Used:</span>
                            <span style={{ width: "70%" }}>
                                <i
                                    className="fab fa-html5 px-2 mr-2 font-weight-light"
                                    style={{ fontSize: "200%", color: "#E44D26" }}
                                ></i>
                                <i
                                    className="fab fa-css3-alt px-2 mr-2 text-primary font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-js-square px-2 mr-2 text-warning font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-node px-2 mr-2 text-success font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                                <i
                                    className="fab fa-react px-2 mr-2 text-primary font-weight-light"
                                    style={{ fontSize: "200%" }}
                                ></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
