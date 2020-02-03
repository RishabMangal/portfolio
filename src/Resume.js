import React, { Component } from "react";
import "./resume.css";
import { Link } from "react-router-dom";
import profilePic from "./profile.jpg";
import cover from "./cover.jpg";
import node from "./logo/node.png";
import react from "./logo/react.jpg";
import redux from "./logo/redux.png";
import html from "./logo/html.png";
import css from "./logo/css.png";
import js from "./logo/js.png";
import php from "./logo/php.png";
import mysql from "./logo/mysql.jpg";
import mongo from "./logo/mongo.jpg";
import mongodb from "./logo/mongodb.png";
import bootstrap from "./logo/bootstrap.png";
import c from "./logo/c.png";
import cpp from "./logo/cpp.png";
import java from "./logo/java.png";
import python from "./logo/python.jpg";
import todo from "./logo/todo.jpg"
import contactmanager from './logo/contactmanager.png'
import feed from './logo/feed.jpg'
import emailjs from 'emailjs-com'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class Resume extends Component {
  state = {
    from: "",
    from_email: "",
    subject: "",
    message: "",
    loading:false
    }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, loading: true });    
   var template_params = {
   "from": this.state.from,
   "from_email": this.state.from_email,
   "subject":this.state.subject,
   "name": this.state.from,
   "message": this.state.message
}

var service_id = "default_service";
var template_id = "portfolio";
    emailjs
      .send(service_id, template_id, template_params, "user_lkMMesURFUC65Hi58FbKe")
      .then(res => {
        console.log("success", res.status, res.text); this.setState({
          from: "",
          from_email: "",
          subject: "",
          message: "",
          loading:false
        });
      })
      .catch(err => { console.log("error", err);this.setState({...this.state,loading:false})});
    // emailjs
    //                         .send(
    //                           "gmail",
    //                           "test",
    //                           { name: "rishab", note: "test" },
    //                           "user_lkMMesURFUC65Hi58FbKe"
    //                         )   
    console.log("i m called");  
  };
  render() {
    return (
      <div style={{ padding: "0px", margin: "0px" }}>
        <div
          className="header navbar navbar-expand-sm bg-light fixed-top"
          role="navigation"
        >
          <h4
            className="navbar-brand text-secondary lead font-weight-normal"
            style={{ fontFamily: "comic sans ms", fontSize: "30px" }}
          >
            Rishab Mangal
          </h4>
          <ul
            className="navbar-nav mr-auto"
            style={{ position: "relative", right: "-55%" }}
          >
            <li className="nav-item px-3">
              <Link
                to="/#"
                className="navlink text-secondary"
                style={{ textDecoration: "none" }}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/#"
                className="navlink text-secondary"
                style={{ textDecoration: "none" }}
              >
                Education
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/#"
                className="navlink text-secondary"
                style={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/#"
                className="navlink text-secondary"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/#"
                className="navlink text-secondary"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "orange",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            height: "50%",
            width: "100%"
          }}
        >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* -----------------------------------------------card------------------------------------------------------------------------------------------------------------ */}
          <div
            className="container-fluid p-0 card-body"
            style={{
              width: "60%",
              height: "600px"
              // backgroundColor: "rgba(255, 255, 255, 1);",
              // position: "relative",
              // top: "65px"
            }}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${profilePic})`,
                backgroundSize: "cover",
                width: "50%",
                height: "80%",
                padding: "0px",
                display: "inline-block",
                position: "relative",
                bottom: "-117px"
              }}
            >
              {/* <img src={profilePic} alt="batman" style={{width:"100%",height:"100%",display:"inline-block",margin:"0px",padding:"0px"}}></img> */}
            </div>
            <div
              className="card"
              style={{
                width: "50%",
                height: "80%",
                // backgroundColor: "white",
                display: "inline-block"
              }}
            >
              <ul className="card-body">
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
                paddingLeft: "25%"
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
                <i
                  className="fab fa-whatsapp px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://www.facebook.com/rishabh.mangal.77">
                <i
                  className="fab fa-facebook-square px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://www.instagram.com/rishabhmangal1/">
                <i
                  className="fab fa-instagram px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://github.com/RishabMangal">
                <i
                  className="fab fa-github px-3 mr-auto"
                  // style={{ position: "relative", left:0 }}
                ></i>
              </a>
              <a href="https://www.github.com">
                <i
                  className="fab fa-google-plus px-3 mr-auto"
                  // style={{ position: "relative", left:0 }}
                ></i>
              </a>
              {/* </ul> */}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------Intro------------------------------------------------------------------------------------------------ */}
        <div
          className="card text-center p-2 mr-auto text-secondary bg-light"
          style={{ marginTop: "11%", border: "white" }}
        >
          <h2>Hello! I'm Rishab</h2>
          <p>
            I am Student at Indian Institute of Information Technology Kota.
            <br></br>I am currently pursuing B.Tech in Computer Science
            Engineering.<br></br>I Love to Develop Web Apps and Mobile
            Apps.Currently,I am <br></br>
            Working on a Project to store accounts and contacts of a person.
            <br></br>I really enjoy being an Software Engineer.I would like to
            <br></br>
            work in a company as a Software Engineer.
          </p>
        </div>

        <div className="card text-center p-2 my-5">
          <h2 className="display-4 p-3 my-3 card">Education</h2>

          <div className="">
            <span
              className="p-3 mr-auto"
              style={{
                display: "inline-block",
                width: "20%",
                verticalAlign: "top"
              }}
            >
              2018-2022
              <p className="lead text-secondary text-center">
                Bachelor's Degree
              </p>
            </span>
            <span
              className="p-3 px-5 mr-auto"
              style={{
                display: "inline-block",
                width: "40%",
                borderLeft: "1px solid gray"
              }}
            >
              <p className="text-justify lead text-left">
                Indian Institute of Information Technology Kota
              </p>
              <p className="text-secondary text-left font-weight-light">
                I am pursuing B.Tech from IIIT Kota.I am a Second Year
                Graduate.My stream is Computer Science Engineering.
              </p>
            </span>
          </div>

          <div className="bg-light">
            <span
              className="p-3 mr-auto"
              style={{
                display: "inline-block",
                width: "20%",
                verticalAlign: "top"
              }}
            >
              2017-2018
              <p className="lead text-secondary text-center">
                JEE Mains and Advance
              </p>
            </span>
            <span
              className="p-3 px-5 mr-auto"
              style={{
                display: "inline-block",
                width: "40%",
                borderLeft: "1px solid gray"
              }}
            >
              <p className="text-justify lead text-left">
                Meritto Institute Japiur
              </p>
              <p className="text-secondary text-left font-weight-light">
                I was preparing for Joint Entrance Exam Mains and Advance.
              </p>
            </span>
          </div>

          <div className="">
            <span
              className="p-3 mr-auto"
              style={{
                display: "inline-block",
                width: "20%",
                verticalAlign: "top"
              }}
            >
              2017-2015
              <p className="lead text-secondary text-center">High School</p>
            </span>
            <span
              className="p-3 px-5 mr-auto"
              style={{
                display: "inline-block",
                width: "40%",
                borderLeft: "1px solid gray"
              }}
            >
              <p className="text-justify lead text-left">
                Good Shephred Sr. Secondary School
              </p>
              <p className="text-secondary text-left font-weight-light">
                I Have completed my High School from RBSE with Maths and Science
                as my Primary Branch.
              </p>
            </span>
          </div>

          <div className="bg-light">
            <span
              className="p-3 mr-auto"
              style={{
                display: "inline-block",
                width: "20%",
                verticalAlign: "top"
              }}
            >
              2015-2002
              <p className="lead text-secondary text-center">Schooling</p>
            </span>
            <span
              className="p-3 px-5 mr-auto"
              style={{
                display: "inline-block",
                width: "40%",
                borderLeft: "1px solid gray"
              }}
            >
              <p className="text-justify lead text-left">
                Good Shephred Sr. Secondary School
              </p>
              <p className="text-secondary text-left font-weight-light">
                I Have completed my Schooling from RBSE.
              </p>
            </span>
          </div>
        </div>

        {/* --------------------------------------------------------------------SKILLS-------------------------------------------------------------------------------------- */}

        <div className="card text-center my-5">
          <h2
            className="display-4 p-3 card text-light"
            style={{
              backgroundColor: "#182153",
              borderBottom: "1px solid white",
              margin: "0px"
            }}
          >
            Skills
          </h2>
          <div
            className=""
            style={{
              margin: "0px",
              backgroundColor: "rgb(41, 55, 122)"
              // width: "100%"
            }}
          >
            {/* --------------------------------------------------HTml------------------------------------------------------------------------------==================------ */}
            <span className="p-3 skill">
              <img className="skillimg" src={html} alt="html5"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                HTML
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------CSS-------------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={css} alt="css3"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                CSS
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------JS------------------------------------------------------------------------------------------------------ */}
            <span className="p-3 skill">
              <img className="skillimg" src={js} alt="js"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                JavaScript
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------NODEJS-------------------------------------------------------------------------------------------------- */}

            <span className="p-3 skill">
              <img className="skillimg" src={node} alt="nodejs"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                NodeJS
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>

            {/* --------------------------------------------------ReactJS------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={react} alt="reactjs"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                ReactJS
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------REdux--------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={redux} alt="redux"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                Redux
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>

            {/* --------------------------------------------------php----------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={php} alt="php"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                Php
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>
            {/* --------------------------------------------------MySQL--------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={mysql} alt="mysql"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                MySQL
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>
            {/* --------------------------------------------------MongoDB------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={mongo} alt="mongoDB"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                MongoDB
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>
            {/* --------------------------------------------------BootStrap--------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={bootstrap} alt="bootstrap"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                BootStrap
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------C----------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={c} alt="C"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                C
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------C++---------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={cpp} alt="C++"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                C++
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
            {/* --------------------------------------------------JAva-------------------------------------------------------------------------------------------------- */}
            <span className="p-3 skill">
              <img className="skillimg" src={java} alt="java"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                Java
                <p className="text-secondary font-weight-light">Beginner</p>
              </p>
            </span>
            {/* --------------------------------------------------Python------------------------------------------------------------------------------------------------ */}
            <span className="p-3 skill">
              <img className="skillimg" src={python} alt="Python"></img>
              <p
                className="lead text-light font-weight-bold text-center p-2 m-2 mr-4"
                style={{ display: "inline-block", float: "right" }}
              >
                Python
                <p className="text-secondary font-weight-light">Intermidiate</p>
              </p>
            </span>
          </div>
        </div>
        {/* --------------------------------Projects------------------------------------------------------------------------------------------------------------------------*/}
        <div className="card  my-5">
          <h2
            className="text-center display-4 p-3 my-3 card"
            style={{ backgroundColor: "#DDDDDD" }}
          >
            Projects
          </h2>
          {/* <Project img={node}></Project> */}
          {/* -----------------------------------To-Do app--------------------------------------------------------------------------------------- */}
          <div
            className=""
            style={{
              width: "70%",
              backgroundColor: "gray",
              marginTop: "1%",
              marginLeft: "15%",
              marginRight: "15%",
              border: "1px solid gray",
              borderRadius: "50px"
              //   borderBottomRightRadius: "50px"
            }}
          >
            {" "}
            <a
              className=""
              style={{ textDecoration: "none" }}
              target="blank"
              href="https://tooo-dooo.herokuapp.com/"
            >
              <img
                src={todo}
                alt="project-shot"
                className="px-1 mr-auto"
                style={{
                  width: "25%",
                  borderRight: "1px dashed gray",
                  borderRadius: "10px"
                }}
              ></img>
            </a>
            <p
              className="display-4 p-3 bg-light text-center font-italic"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                width: "75%",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "25px"
              }}
            >
              To-do App
              <p
                className="lead text-secondary p-2 m-3 my-4 font-weight-light "
                // style={{ display: "block",fontSize:"40px" }}
              >
                A simple To-Do App to Store your todo list.
              </p>
              <p
                className="p-2 m-1 text-left font-weight-normal"
                style={{ display: "block", fontSize: "30px" }}
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
                  <img
                    src={mongodb}
                    alt="mongoDB"
                    className="bg-light"
                    style={{
                      height: "60px",
                      padding: "2px",
                      margin: "2px",
                      marginBottom: ""
                    }}
                  ></img>
                </span>
              </p>
            </p>
          </div>

          {/* ---------------------Contact Manager--------------------------------------------------------------------------------------------------------- */}

          <div
            className=""
            style={{
              width: "70%",
              backgroundColor: "whitesmoke",
              marginTop: "1%",
              marginLeft: "15%",
              marginRight: "15%",
              border: "1px solid gray",
              borderRadius: "50px"
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
                  borderRadius: "10px"
                }}
              ></img>
            </a>
            <p
              className="display-4 p-2 bg-light text-center font-italic"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                width: "75%",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "25px"
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
                style={{ display: "block", fontSize: "30px" }}
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
            </p>
          </div>
          {/* -------------------------------------------Feedback Software------------------------------------------------------------------------ */}

          <div
            className=""
            style={{
              width: "70%",
              backgroundColor: "whitesmoke",
              marginTop: "1%",
              marginLeft: "15%",
              marginRight: "15%",
              border: "1px solid gray",
              borderRadius: "50px"
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
                  borderRadius: "10px"
                }}
              ></img>
            </a>
            <p
              className="display-4 p-2 bg-light text-center font-italic"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                width: "75%",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "25px"
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
                style={{ display: "block", fontSize: "30px" }}
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
                style={{ display: "block", fontSize: "30px" }}
              >
                <span style={{ width: "30%" }}>Tech Used:</span>
                <span style={{ width: "70%" }}>
                  <i
                    className="fab fa-python px-2 mr-2 text-warning font-weight-light"
                    style={{ fontSize: "200%" }}
                  ></i>
                </span>
              </p>
            </p>
          </div>
        </div>

        {/* ---------------------------------------------Contact--------------------------------------------------------------------------------------------- */}

        <div>
          <h2
            className="display-4 p-3 card text-dark text-center"
            style={{
              backgroundColor: "#F1F1F1",
              borderBottom: "1px solid white",
              margin: "0px"
            }}
          >
            Contact Me
          </h2>
          {this.state.loading ? (
            <div
              className="card mr-auto"
              style={{
                width: "40%",
                display: "inline-block",
                marginLeft: "10%",
                backgroundColor: "#F1F1F1",
                borderRight: "2px solid white"
              }}
            >
              <div
                style={{
                  backgroundColor: "#F1F1F1",
                  margin: "3%",
                  padding: "6%",
                  width: "30%",
                  marginLeft: "35%",
                  marginBottom: "0"
                }}
              >
                <Loader type="Plane" color="#1B73BA" width={100} height={90} />
              </div>
              <div
                className="lead"
                style={{
                  backgroundColor: "#F1F1F1",
                  padding: "5%",
                  width: "30%",
                  marginLeft: "35%",
                  marginTop: "0",
                  marginBottom: "8%",
                  fontFamily: "comic sans ms",
                  fontStyle: "italic",
                  textAlign: "center"
                }}
              >
                Sending...
              </div>
            </div>
          ) : (
            <div
              className="card mr-auto"
              style={{
                width: "40%",
                display: "inline-block",
                marginLeft: "10%",
                backgroundColor: "#F1F1F1",
                borderRight: "2px solid white"
              }}
            >
              <form className="card-body" onSubmit={this.submitHandler}>
                <div className="form-row" id="test">
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jack Sparrow"
                      onChange={this.onChangeHandler}
                      name="from"
                      value={this.state.from}
                    ></input>
                  </div>
                  <div className="form-group col-md-7">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="lucifer@microsoft.com"
                        onChange={this.onChangeHandler}
                        name="from_email"
                        value={this.state.from_email}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Subject</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Build A WebApp"
                      onChange={this.onChangeHandler}
                      name="subject"
                      value={this.state.subject}
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Message"
                    onChange={this.onChangeHandler}
                    name="message"
                    value={this.state.message}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark form-control"
                    value="Submit"
                  ></input>
                </div>
              </form>
            </div>
          )}

          <div
            className="card p-3"
            style={{
              width: "40%",
              backgroundColor: "#F1F1F1",
              display: "inline-block",
              verticalAlign: "top",
              borderLeft: "1px solid white"
            }}
          >
            <ul className="card-body">
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
            <div
              className="container-fluid text-dark"
              style={{
                backgroundColor: "#000000",
                display: "inline-block",
                paddingBottom: "1%",
                paddingTop: "2%",
                paddingLeft: "25%",
                borderTop: "1px solid white",
                borderLeft: "1px solid white"
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
                <i
                  className="fab fa-whatsapp px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://www.facebook.com/rishabh.mangal.77">
                <i
                  className="fab fa-facebook-square px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://www.instagram.com/rishabhmangal1/">
                <i
                  className="fab fa-instagram px-3 mr-auto"
                  // style={{ position: "relative", left: 0 }}
                ></i>
              </a>
              <a href="https://github.com/RishabMangal">
                <i
                  className="fab fa-github px-3 mr-auto"
                  // style={{ position: "relative", left:0 }}
                ></i>
              </a>
              <a href="https://www.github.com">
                <i
                  className="fab fa-google-plus px-3 mr-auto"
                  // style={{ position: "relative", left:0 }}
                ></i>
              </a>
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
